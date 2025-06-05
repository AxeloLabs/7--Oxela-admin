# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*getfeaturedImagesOxela*](#getfeaturedimagesoxela)
  - [*getProductsOxela*](#getproductsoxela)
  - [*getProductByIdOxela*](#getproductbyidoxela)
  - [*sEOSOxela*](#seosoxela)
  - [*getSEOByIdOxela*](#getseobyidoxela)
- [**Mutations**](#mutations)
  - [*InsertProductOxelaWithImage*](#insertproductoxelawithimage)

# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@firebasegen/default-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## getfeaturedImagesOxela
You can execute the `getfeaturedImagesOxela` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
getfeaturedImagesOxela(): QueryPromise<GetfeaturedImagesOxelaData, undefined>;

interface GetfeaturedImagesOxelaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetfeaturedImagesOxelaData, undefined>;
}
export const getfeaturedImagesOxelaRef: GetfeaturedImagesOxelaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getfeaturedImagesOxela(dc: DataConnect): QueryPromise<GetfeaturedImagesOxelaData, undefined>;

interface GetfeaturedImagesOxelaRef {
  ...
  (dc: DataConnect): QueryRef<GetfeaturedImagesOxelaData, undefined>;
}
export const getfeaturedImagesOxelaRef: GetfeaturedImagesOxelaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getfeaturedImagesOxelaRef:
```typescript
const name = getfeaturedImagesOxelaRef.operationName;
console.log(name);
```

### Variables
The `getfeaturedImagesOxela` query has no variables.
### Return Type
Recall that executing the `getfeaturedImagesOxela` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetfeaturedImagesOxelaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetfeaturedImagesOxelaData {
  productImages: ({
    id: UUIDString;
    url: string;
    width: number;
    height: number;
    altText?: string | null;
  } & ProductImage_Key)[];
}
```
### Using `getfeaturedImagesOxela`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getfeaturedImagesOxela } from '@firebasegen/default-connector';


// Call the `getfeaturedImagesOxela()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getfeaturedImagesOxela();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getfeaturedImagesOxela(dataConnect);

console.log(data.productImages);

// Or, you can use the `Promise` API.
getfeaturedImagesOxela().then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

### Using `getfeaturedImagesOxela`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getfeaturedImagesOxelaRef } from '@firebasegen/default-connector';


// Call the `getfeaturedImagesOxelaRef()` function to get a reference to the query.
const ref = getfeaturedImagesOxelaRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getfeaturedImagesOxelaRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.productImages);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.productImages);
});
```

## getProductsOxela
You can execute the `getProductsOxela` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
getProductsOxela(): QueryPromise<GetProductsOxelaData, undefined>;

interface GetProductsOxelaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProductsOxelaData, undefined>;
}
export const getProductsOxelaRef: GetProductsOxelaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductsOxela(dc: DataConnect): QueryPromise<GetProductsOxelaData, undefined>;

interface GetProductsOxelaRef {
  ...
  (dc: DataConnect): QueryRef<GetProductsOxelaData, undefined>;
}
export const getProductsOxelaRef: GetProductsOxelaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductsOxelaRef:
```typescript
const name = getProductsOxelaRef.operationName;
console.log(name);
```

### Variables
The `getProductsOxela` query has no variables.
### Return Type
Recall that executing the `getProductsOxela` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductsOxelaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `getProductsOxela`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductsOxela } from '@firebasegen/default-connector';


// Call the `getProductsOxela()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductsOxela();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductsOxela(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductsOxela().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `getProductsOxela`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductsOxelaRef } from '@firebasegen/default-connector';


// Call the `getProductsOxelaRef()` function to get a reference to the query.
const ref = getProductsOxelaRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductsOxelaRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## getProductByIdOxela
You can execute the `getProductByIdOxela` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
getProductByIdOxela(vars: GetProductByIdOxelaVariables): QueryPromise<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;

interface GetProductByIdOxelaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductByIdOxelaVariables): QueryRef<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;
}
export const getProductByIdOxelaRef: GetProductByIdOxelaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductByIdOxela(dc: DataConnect, vars: GetProductByIdOxelaVariables): QueryPromise<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;

interface GetProductByIdOxelaRef {
  ...
  (dc: DataConnect, vars: GetProductByIdOxelaVariables): QueryRef<GetProductByIdOxelaData, GetProductByIdOxelaVariables>;
}
export const getProductByIdOxelaRef: GetProductByIdOxelaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductByIdOxelaRef:
```typescript
const name = getProductByIdOxelaRef.operationName;
console.log(name);
```

### Variables
The `getProductByIdOxela` query requires an argument of type `GetProductByIdOxelaVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductByIdOxelaVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `getProductByIdOxela` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductByIdOxelaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `getProductByIdOxela`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductByIdOxela, GetProductByIdOxelaVariables } from '@firebasegen/default-connector';

// The `getProductByIdOxela` query requires an argument of type `GetProductByIdOxelaVariables`:
const getProductByIdOxelaVars: GetProductByIdOxelaVariables = {
  id: ..., 
};

// Call the `getProductByIdOxela()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductByIdOxela(getProductByIdOxelaVars);
// Variables can be defined inline as well.
const { data } = await getProductByIdOxela({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductByIdOxela(dataConnect, getProductByIdOxelaVars);

console.log(data.product);

// Or, you can use the `Promise` API.
getProductByIdOxela(getProductByIdOxelaVars).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

### Using `getProductByIdOxela`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductByIdOxelaRef, GetProductByIdOxelaVariables } from '@firebasegen/default-connector';

// The `getProductByIdOxela` query requires an argument of type `GetProductByIdOxelaVariables`:
const getProductByIdOxelaVars: GetProductByIdOxelaVariables = {
  id: ..., 
};

// Call the `getProductByIdOxelaRef()` function to get a reference to the query.
const ref = getProductByIdOxelaRef(getProductByIdOxelaVars);
// Variables can be defined inline as well.
const ref = getProductByIdOxelaRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductByIdOxelaRef(dataConnect, getProductByIdOxelaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.product);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.product);
});
```

## sEOSOxela
You can execute the `sEOSOxela` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
sEosOxela(): QueryPromise<SEosOxelaData, undefined>;

interface SEosOxelaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<SEosOxelaData, undefined>;
}
export const sEosOxelaRef: SEosOxelaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
sEosOxela(dc: DataConnect): QueryPromise<SEosOxelaData, undefined>;

interface SEosOxelaRef {
  ...
  (dc: DataConnect): QueryRef<SEosOxelaData, undefined>;
}
export const sEosOxelaRef: SEosOxelaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the sEosOxelaRef:
```typescript
const name = sEosOxelaRef.operationName;
console.log(name);
```

### Variables
The `sEOSOxela` query has no variables.
### Return Type
Recall that executing the `sEOSOxela` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SEosOxelaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SEosOxelaData {
  sEOS: ({
    id: UUIDString;
    title: string;
    description: string;
    keywords: string;
  } & SEO_Key)[];
}
```
### Using `sEOSOxela`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, sEosOxela } from '@firebasegen/default-connector';


// Call the `sEosOxela()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await sEosOxela();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await sEosOxela(dataConnect);

console.log(data.sEOS);

// Or, you can use the `Promise` API.
sEosOxela().then((response) => {
  const data = response.data;
  console.log(data.sEOS);
});
```

### Using `sEOSOxela`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, sEosOxelaRef } from '@firebasegen/default-connector';


// Call the `sEosOxelaRef()` function to get a reference to the query.
const ref = sEosOxelaRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = sEosOxelaRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sEOS);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sEOS);
});
```

## getSEOByIdOxela
You can execute the `getSEOByIdOxela` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
getSeoByIdOxela(vars: GetSeoByIdOxelaVariables): QueryPromise<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;

interface GetSeoByIdOxelaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSeoByIdOxelaVariables): QueryRef<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
}
export const getSeoByIdOxelaRef: GetSeoByIdOxelaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSeoByIdOxela(dc: DataConnect, vars: GetSeoByIdOxelaVariables): QueryPromise<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;

interface GetSeoByIdOxelaRef {
  ...
  (dc: DataConnect, vars: GetSeoByIdOxelaVariables): QueryRef<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
}
export const getSeoByIdOxelaRef: GetSeoByIdOxelaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSeoByIdOxelaRef:
```typescript
const name = getSeoByIdOxelaRef.operationName;
console.log(name);
```

### Variables
The `getSEOByIdOxela` query requires an argument of type `GetSeoByIdOxelaVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSeoByIdOxelaVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `getSEOByIdOxela` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSeoByIdOxelaData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSeoByIdOxelaData {
  sEO?: {
    id: UUIDString;
    title: string;
    description: string;
    keywords: string;
  } & SEO_Key;
}
```
### Using `getSEOByIdOxela`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSeoByIdOxela, GetSeoByIdOxelaVariables } from '@firebasegen/default-connector';

// The `getSEOByIdOxela` query requires an argument of type `GetSeoByIdOxelaVariables`:
const getSeoByIdOxelaVars: GetSeoByIdOxelaVariables = {
  id: ..., 
};

// Call the `getSeoByIdOxela()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSeoByIdOxela(getSeoByIdOxelaVars);
// Variables can be defined inline as well.
const { data } = await getSeoByIdOxela({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSeoByIdOxela(dataConnect, getSeoByIdOxelaVars);

console.log(data.sEO);

// Or, you can use the `Promise` API.
getSeoByIdOxela(getSeoByIdOxelaVars).then((response) => {
  const data = response.data;
  console.log(data.sEO);
});
```

### Using `getSEOByIdOxela`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSeoByIdOxelaRef, GetSeoByIdOxelaVariables } from '@firebasegen/default-connector';

// The `getSEOByIdOxela` query requires an argument of type `GetSeoByIdOxelaVariables`:
const getSeoByIdOxelaVars: GetSeoByIdOxelaVariables = {
  id: ..., 
};

// Call the `getSeoByIdOxelaRef()` function to get a reference to the query.
const ref = getSeoByIdOxelaRef(getSeoByIdOxelaVars);
// Variables can be defined inline as well.
const ref = getSeoByIdOxelaRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSeoByIdOxelaRef(dataConnect, getSeoByIdOxelaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sEO);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sEO);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertProductOxelaWithImage
You can execute the `InsertProductOxelaWithImage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
insertProductOxelaWithImage(vars: InsertProductOxelaWithImageVariables): MutationPromise<InsertProductOxelaWithImageData, InsertProductOxelaWithImageVariables>;

interface InsertProductOxelaWithImageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertProductOxelaWithImageVariables): MutationRef<InsertProductOxelaWithImageData, InsertProductOxelaWithImageVariables>;
}
export const insertProductOxelaWithImageRef: InsertProductOxelaWithImageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertProductOxelaWithImage(dc: DataConnect, vars: InsertProductOxelaWithImageVariables): MutationPromise<InsertProductOxelaWithImageData, InsertProductOxelaWithImageVariables>;

interface InsertProductOxelaWithImageRef {
  ...
  (dc: DataConnect, vars: InsertProductOxelaWithImageVariables): MutationRef<InsertProductOxelaWithImageData, InsertProductOxelaWithImageVariables>;
}
export const insertProductOxelaWithImageRef: InsertProductOxelaWithImageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertProductOxelaWithImageRef:
```typescript
const name = insertProductOxelaWithImageRef.operationName;
console.log(name);
```

### Variables
The `InsertProductOxelaWithImage` mutation requires an argument of type `InsertProductOxelaWithImageVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `InsertProductOxelaWithImage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertProductOxelaWithImageData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertProductOxelaWithImageData {
  product: Product_Key;
  productImage_insert: ProductImage_Key;
  product_update?: Product_Key | null;
}
```
### Using `InsertProductOxelaWithImage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertProductOxelaWithImage, InsertProductOxelaWithImageVariables } from '@firebasegen/default-connector';

// The `InsertProductOxelaWithImage` mutation requires an argument of type `InsertProductOxelaWithImageVariables`:
const insertProductOxelaWithImageVars: InsertProductOxelaWithImageVariables = {
  handle: ..., 
  title: ..., 
  description: ..., // optional
  availableForSale: ..., 
  productType: ..., // optional
  imageUrl: ..., 
  imageAltText: ..., // optional
  imageWidth: ..., 
  imageHeight: ..., 
  featured: ..., 
  displayPosition: ..., 
};

// Call the `insertProductOxelaWithImage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertProductOxelaWithImage(insertProductOxelaWithImageVars);
// Variables can be defined inline as well.
const { data } = await insertProductOxelaWithImage({ handle: ..., title: ..., description: ..., availableForSale: ..., productType: ..., imageUrl: ..., imageAltText: ..., imageWidth: ..., imageHeight: ..., featured: ..., displayPosition: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertProductOxelaWithImage(dataConnect, insertProductOxelaWithImageVars);

console.log(data.product);
console.log(data.productImage_insert);
console.log(data.product_update);

// Or, you can use the `Promise` API.
insertProductOxelaWithImage(insertProductOxelaWithImageVars).then((response) => {
  const data = response.data;
  console.log(data.product);
  console.log(data.productImage_insert);
  console.log(data.product_update);
});
```

### Using `InsertProductOxelaWithImage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertProductOxelaWithImageRef, InsertProductOxelaWithImageVariables } from '@firebasegen/default-connector';

// The `InsertProductOxelaWithImage` mutation requires an argument of type `InsertProductOxelaWithImageVariables`:
const insertProductOxelaWithImageVars: InsertProductOxelaWithImageVariables = {
  handle: ..., 
  title: ..., 
  description: ..., // optional
  availableForSale: ..., 
  productType: ..., // optional
  imageUrl: ..., 
  imageAltText: ..., // optional
  imageWidth: ..., 
  imageHeight: ..., 
  featured: ..., 
  displayPosition: ..., 
};

// Call the `insertProductOxelaWithImageRef()` function to get a reference to the mutation.
const ref = insertProductOxelaWithImageRef(insertProductOxelaWithImageVars);
// Variables can be defined inline as well.
const ref = insertProductOxelaWithImageRef({ handle: ..., title: ..., description: ..., availableForSale: ..., productType: ..., imageUrl: ..., imageAltText: ..., imageWidth: ..., imageHeight: ..., featured: ..., displayPosition: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertProductOxelaWithImageRef(dataConnect, insertProductOxelaWithImageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product);
console.log(data.productImage_insert);
console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product);
  console.log(data.productImage_insert);
  console.log(data.product_update);
});
```

