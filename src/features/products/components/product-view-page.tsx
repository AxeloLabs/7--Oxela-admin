// import { fakeProducts, Product } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import ProductForm from './product-form';
import { getProductByIdOxela } from '@firebasegen/default-connector';
import { Product } from '@/constants/mock-api';

// TODO: manque les champs ALT de image
// id: uuidToNumber(result.data.product.id), // 👈 UUID transformé en number safe
// id: result.data.product.id, // 👈 UUID transformé en number safe
// TODO: Manque le lien sur le SEO

type TProductViewPageProps = {
  productId: string;
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

function uuidToNumber(uuid: string): number {
  let hash = 0;
  for (let i = 0; i < uuid.length; i++) {
    const char = uuid.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export default async function ProductViewPage({
  productId
}: TProductViewPageProps) {
  // ___________________________________________
  //
  // -- ADD mode --
  // _____________________________________________
  if (productId === 'new') {
    const pageTitle = 'Créer un nouveau Produit';
    return <ProductForm initialData={null} pageTitle={pageTitle} />;
  }
  // ___________________________________________
  //
  // -- EDIT mode --
  // ___________________________________________
  else {
    // product = data.product as Product; // code original
    const pageTitle = `Editer un Produit`;
    const query = await getProductByIdOxela({ id: productId });
    const productQuery = query.data?.product;
    if (!productQuery) {
      notFound(); // eux
      // throw new Error('Aucun produit retourné');// TODO: moi : essayer
    }
    const productDatatable: ProductTableDto = {
      name: productQuery.title,
      description: productQuery.description ?? '',
      price: 0,
      category: productQuery.seo?.keywords ?? '',
      photo_url: productQuery.featuredImage?.url ?? '',

      // entityId: productId,
      id: uuidToNumber(productId), // 👈 UUID transformé en number for datatable-component
      created_at: productQuery.createdAt,
      updated_at: productQuery.updatedAt
    };
    return <ProductForm initialData={productDatatable} pageTitle={pageTitle} />;
  }
}
