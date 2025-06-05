// import { Product } from '@/constants/data';
// import { fakeProducts } from '@/constants/mock-api';
// import { searchParamsCache } from '@/lib/searchparams';
import { dc } from '@/lib/firebase/data-connect';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';
import { getProductsOxela } from '@firebasegen/default-connector';

type ProductListingPage = {};

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

// Showcasing the use of search params cache in nested RSCs
// const page = searchParamsCache.get('page');
// const search = searchParamsCache.get('name');
// const pageLimit = searchParamsCache.get('perPage');
// const categories = searchParamsCache.get('category');
// const filters = {
//   page,
//   limit: pageLimit,
//   ...(search && { search }),
//   ...(categories && { categories: categories })
// };
// fake
// const data = await fakeProducts.getProducts(filters);
// const totalProducts = data.total_products;
// const products: Product[] = data.products;

// TODO: cath error, fonction fetchData()
async function fetchData() {
  try {
    // const res = await product_query({});
    const res = await getProductsOxela(dc);
    return res;
  } catch (e) {
    console.error('🔥 ERREUR DataConnect:', e);
    return null;
  }
}
export default async function ProductListingPage({}: ProductListingPage) {
  // const productsQuery = await getProductsOxela(dc);
  const productsQuery = await fetchData();
  // if (!productsQuery.data?.products) {
  if (!productsQuery) {
    // throw new Error('Aucun produit retourné');
    console.error('⚠️ Aucun produit retourné: [throw new Error]');

    return <ProductTable data={[]} totalItems={0} columns={columns} />;
  }
  // TODO: il y a un couplage de dependance entre les DATA-TABLE et ce DTO, qui est different des ENTITES
  const productsTable: ProductTableDto[] = productsQuery.data.products.map(
    (product) => ({
      name: product.title,
      description: product.description ?? '',
      price: 0,
      category: product.seo?.keywords ?? '',
      photo_url: product.featuredImage?.url ?? '',

      id: uuidToNumber(product.id), // 👈 UUID transformé en number safe
      created_at: product.createdAt,
      updated_at: product.updatedAt
    })
  );
  const totalProducts = productsTable.length;
  return (
    <ProductTable
      data={productsTable}
      totalItems={totalProducts}
      columns={columns}
    />
  );
}
