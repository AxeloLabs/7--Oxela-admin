import {
  ConnectorConfig,
  DataConnect,
  QueryRef,
  QueryPromise,
  MutationRef,
  MutationPromise
} from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;

export interface GetProductByIdOxelaData {
  product?: {
    id: UUIDString;
    featuredImage?: {
      url: string;
      width: number;
      height: number;
      altText?: string | null;
    };
    seo?: {
      title: string;
      description: string;
      keywords: string;
    };
    handle: string;
    title: string;
    description?: string | null;
    productType?: string | null;
    availableForSale: boolean;
    createdAt: DateString;
    updatedAt: DateString;
  } & Product_Key;
}

export interface GetProductByIdOxelaVariables {
  id: UUIDString;
}

export interface GetProductsOxelaData {
  products: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    handle: string;
    availableForSale: boolean;
    createdAt: DateString;
    updatedAt: DateString;
    featuredImage?: {
      url: string;
      width: number;
      height: number;
      altText?: string | null;
    };
    seo?: {
      title: string;
      description: string;
      keywords: string;
    };
  } & Product_Key)[];
}

export interface GetSeoByIdOxelaData {
  sEO?: {
    id: UUIDString;
    title: string;
    description: string;
    keywords: string;
  } & SEO_Key;
}

export interface GetSeoByIdOxelaVariables {
  id: UUIDString;
}

export interface GetfeaturedImagesOxelaData {
  productImages: ({
    id: UUIDString;
    url: string;
    width: number;
    height: number;
    altText?: string | null;
  } & ProductImage_Key)[];
}

export interface InsertProductOxelaWithImageData {
  product: Product_Key;
  productImage_insert: ProductImage_Key;
  product_update?: Product_Key | null;
}

export interface InsertProductOxelaWithImageVariables {
  handle: string;
  title: string;
  description?: string | null;
  availableForSale: boolean;
  productType?: string | null;
  imageUrl: string;
  imageAltText?: string | null;
  imageWidth: number;
  imageHeight: number;
  featured: boolean;
  displayPosition: number;
}

export interface ProductImage_Key {
  id: UUIDString;
  __typename?: 'ProductImage_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface SEO_Key {
  id: UUIDString;
  __typename?: 'SEO_Key';
}

export interface SEosOxelaData {
  sEOS: ({
    id: UUIDString;
    title: string;
    description: string;
    keywords: string;
  } & SEO_Key)[];
}

interface InsertProductOxelaWithImageRef {
  /* Allow users to create refs without passing in DataConnect */
  (
    vars: InsertProductOxelaWithImageVariables
  ): MutationRef<
    InsertProductOxelaWithImageData,
    InsertProductOxelaWithImageVariables
  >;
  /* Allow users to pass in custom DataConnect instances */
  (
    dc: DataConnect,
    vars: InsertProductOxelaWithImageVariables
  ): MutationRef<
    InsertProductOxelaWithImageData,
    InsertProductOxelaWithImageVariables
  >;
  operationName: string;
}
export const insertProductOxelaWithImageRef: InsertProductOxelaWithImageRef;

export function insertProductOxelaWithImage(
  vars: InsertProductOxelaWithImageVariables
): MutationPromise<
  InsertProductOxelaWithImageData,
  InsertProductOxelaWithImageVariables
>;
export function insertProductOxelaWithImage(
  dc: DataConnect,
  vars: InsertProductOxelaWithImageVariables
): MutationPromise<
  InsertProductOxelaWithImageData,
  InsertProductOxelaWithImageVariables
>;

interface GetfeaturedImagesOxelaRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetfeaturedImagesOxelaData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetfeaturedImagesOxelaData, undefined>;
  operationName: string;
}
export const getfeaturedImagesOxelaRef: GetfeaturedImagesOxelaRef;

export function getfeaturedImagesOxela(): QueryPromise<
  GetfeaturedImagesOxelaData,
  undefined
>;
export function getfeaturedImagesOxela(
  dc: DataConnect
): QueryPromise<GetfeaturedImagesOxelaData, undefined>;

interface GetProductsOxelaRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProductsOxelaData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetProductsOxelaData, undefined>;
  operationName: string;
}
export const getProductsOxelaRef: GetProductsOxelaRef;

export function getProductsOxela(): QueryPromise<
  GetProductsOxelaData,
  undefined
>;
export function getProductsOxela(
  dc: DataConnect
): QueryPromise<GetProductsOxelaData, undefined>;

interface GetProductByIdOxelaRef {
  /* Allow users to create refs without passing in DataConnect */
  (
    vars: GetProductByIdOxelaVariables
  ): QueryRef<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (
    dc: DataConnect,
    vars: GetProductByIdOxelaVariables
  ): QueryRef<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;
  operationName: string;
}
export const getProductByIdOxelaRef: GetProductByIdOxelaRef;

export function getProductByIdOxela(
  vars: GetProductByIdOxelaVariables
): QueryPromise<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;
export function getProductByIdOxela(
  dc: DataConnect,
  vars: GetProductByIdOxelaVariables
): QueryPromise<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;

interface SEosOxelaRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<SEosOxelaData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<SEosOxelaData, undefined>;
  operationName: string;
}
export const sEosOxelaRef: SEosOxelaRef;

export function sEosOxela(): QueryPromise<SEosOxelaData, undefined>;
export function sEosOxela(
  dc: DataConnect
): QueryPromise<SEosOxelaData, undefined>;

interface GetSeoByIdOxelaRef {
  /* Allow users to create refs without passing in DataConnect */
  (
    vars: GetSeoByIdOxelaVariables
  ): QueryRef<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (
    dc: DataConnect,
    vars: GetSeoByIdOxelaVariables
  ): QueryRef<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
  operationName: string;
}
export const getSeoByIdOxelaRef: GetSeoByIdOxelaRef;

export function getSeoByIdOxela(
  vars: GetSeoByIdOxelaVariables
): QueryPromise<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
export function getSeoByIdOxela(
  dc: DataConnect,
  vars: GetSeoByIdOxelaVariables
): QueryPromise<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
