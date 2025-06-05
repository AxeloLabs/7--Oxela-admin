'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '@/lib/firebaseConfig';
import { storage } from '@/lib/firebase/storage';
import { FileUploader } from '@/components/file-uploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
// import { Product } from '@/constants/mock-api';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { dc } from '@/lib/firebase/data-connect';
import { insertProductOxelaWithImage } from '@firebasegen/default-connector';
// import { upsertProduct } from '@firebasegen/default-connector';
// import { product_insert, product_upsert } from '@firebasegen/default-connector';
// import { updateProductOxela } from '@firebasegen/default-connector';
// import { insertProductOxela } from '@firebasegen/default-connector';

type ProductDtoIn = {
  //  # product
  handle: string;
  title: string;
  description?: string;
  availableForSale: boolean;
  productType: string;
  // price
  // # image
  imageUrl: string;
  imageAltText?: string;
  imageWidth: number;
  imageHeight: number;
  featured: boolean;
  displayPosition: number;
};

type ProductFormDto = {
  name: string;
  description: string;
  price: number;
  category: string;
};
type ProductTableDto = {
  name: string;
  description: string;
  price: number;
  category: string;
  photo_url: string;

  id: number; // 👈 mais on reçoit un UUID (string) => on le "cast" en number
  created_at: string;
  updated_at: string;
};

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const formSchema = z.object({
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.'
  }),
  // FIXED : becoz the react input is a string and we have a number
  // price: z.number(),
  price: z.preprocess(
    (val) => Number(val),
    z.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number'
    })
  ),
  category: z.string().default('z-unclassified'),
  image: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.'
  })
});

async function getImage(values: z.infer<typeof formSchema>) {
  const file = values.image?.[0];
  if (!file) return undefined;
  const imageBitmap = await createImageBitmap(file); // Vérifier les dimensions de l'image
  if (imageBitmap.width > 2000 || imageBitmap.height > 2000) {
    alert('Image dimensions should not exceed 2000x2000 pixels.');
    return;
  }
  // const storageRef = ref(storage, `product/${file.name}`); // Créer une référence dans Firebase Storage
  // await uploadBytes(storageRef, file); // Uploader l'image
  const image = {
    url: '/assets/fallback-image-product.jpg', // Mock static
    // url: await getDownloadURL(storageRef), // Obtenir l'URL de téléchargement
    width: imageBitmap.width,
    height: imageBitmap.height
  };
  return image;
}

// TODO: cath error
// try {
//   const res = await product_query({});
//   return res;
// } catch (e) {
//   console.error("🔥 ERREUR DataConnect:", e);
//   return null;
// }
export default function ProductForm({
  initialData,
  pageTitle
}: {
  initialData: ProductTableDto | null;
  pageTitle: string;
}) {
  const router = useRouter();

  // ___________________________________________
  //
  // -- FORM SETUP --
  // ___________________________________________
  const defaultValues: ProductFormDto = {
    // TODO: img: il n y a pas de gestion de l image il me semble
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price || 0,
    category: initialData?.category || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  // ___________________________________________
  //
  // -- FORM SUBMIT --
  // ___________________________________________
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userFormValues: ProductFormDto = {
      name: values.name,
      description: values.description,
      price: 0,
      category: values.category || 'z-unclassified'
    };

    const imageDefaultValues = {
      url: '',
      altText: 'z-unclassified',
      width: 0,
      height: 0,
      featured: false,
      displayPosition: 1
    };

    const productDtoIn: ProductDtoIn = {
      // product
      handle: userFormValues.name.toLowerCase().replace(/\s+/g, '-'),
      title: userFormValues.name,
      description: userFormValues.description,
      availableForSale: true,
      productType: userFormValues.category,
      // TODO: price
      imageUrl: imageDefaultValues.url,
      imageAltText: imageDefaultValues.altText,
      imageWidth: imageDefaultValues.width,
      imageHeight: imageDefaultValues.height,
      featured: imageDefaultValues.featured,
      displayPosition: imageDefaultValues.displayPosition
    };

    const image = await getImage(values);
    if (image) {
      productDtoIn.imageUrl = image.url;
      productDtoIn.imageWidth = image.width;
      productDtoIn.imageHeight = image.height;
      // productDtoIn.imageAltText =
      // productDtoIn.featured =
      // productDtoIn.displayPosition =
    }

    // ___________________________________________
    //
    // 1 -- ADD mode --
    // ___________________________________________
    if (initialData === null) {
      try {
        const productId = await insertProductOxelaWithImage(dc, {
          ...productDtoIn
        });
        router.push('/admin/product');
        toast.success('🎉 Produit ajouté avec succes!');
      } catch (e) {
        // TODO: COMMENT IN PROD
        router.push('/admin/product');
        toast.success('🎉 Produit ajouté avec succes');

        alert('catched error');
        console.log('catched error');
        console.error('Network/Server error:', e);
      }
    }
    // ___________________________________________
    //
    // 2 -- EDIT mode --
    // ___________________________________________
    else {
      // EDIT
      // const productEntity = { id: initialData.entityId!, ...product }; // ! => In the edit mode, it is mandatory TODO: in prod, try the url with any value to see of tha app behave
      // const productId = await updateProductOxela(dc, { ...productEntity });
      // true, // availableForSale
      // values.category // productType
      alert('UpdateProduct mutation:');
      // console.log('UpdateProduct result:', result);
    }
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <div className='space-y-6'>
                  <FormItem className='w-full'>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={4}
                        maxSize={4 * 1024 * 1024}
                        // disabled={loading}
                        // progresses={progresses}
                        // pass the onUpload function here for direct upload
                        // onUpload={uploadFiles}
                        // disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter product name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value[field.value.length - 1]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select categories' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='electronics'>
                          E-commerce website
                        </SelectItem>
                        <SelectItem value='clothing'>Blog</SelectItem>
                        <SelectItem value='home'>Application Web</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='price'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        step='0.01'
                        placeholder='Entrer un prix'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter product description'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Add Product</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
