import {
  InsertProductOxelaWithImageData,
  InsertProductOxelaWithImageVariables,
  GetfeaturedImagesOxelaData,
  GetProductsOxelaData,
  GetProductByIdOxelaData,
  GetProductByIdOxelaVariables,
  SEosOxelaData,
  GetSeoByIdOxelaData,
  GetSeoByIdOxelaVariables
} from '../';
import {
  UseDataConnectQueryResult,
  useDataConnectQueryOptions,
  UseDataConnectMutationResult,
  useDataConnectMutationOptions
} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';

export function useInsertProductOxelaWithImage(
  options?: useDataConnectMutationOptions<
    InsertProductOxelaWithImageData,
    FirebaseError,
    InsertProductOxelaWithImageVariables
  >
): UseDataConnectMutationResult<
  InsertProductOxelaWithImageData,
  InsertProductOxelaWithImageVariables
>;
export function useInsertProductOxelaWithImage(
  dc: DataConnect,
  options?: useDataConnectMutationOptions<
    InsertProductOxelaWithImageData,
    FirebaseError,
    InsertProductOxelaWithImageVariables
  >
): UseDataConnectMutationResult<
  InsertProductOxelaWithImageData,
  InsertProductOxelaWithImageVariables
>;

export function useGetfeaturedImagesOxela(
  options?: useDataConnectQueryOptions<GetfeaturedImagesOxelaData>
): UseDataConnectQueryResult<GetfeaturedImagesOxelaData, undefined>;
export function useGetfeaturedImagesOxela(
  dc: DataConnect,
  options?: useDataConnectQueryOptions<GetfeaturedImagesOxelaData>
): UseDataConnectQueryResult<GetfeaturedImagesOxelaData, undefined>;

export function useGetProductsOxela(
  options?: useDataConnectQueryOptions<GetProductsOxelaData>
): UseDataConnectQueryResult<GetProductsOxelaData, undefined>;
export function useGetProductsOxela(
  dc: DataConnect,
  options?: useDataConnectQueryOptions<GetProductsOxelaData>
): UseDataConnectQueryResult<GetProductsOxelaData, undefined>;

export function useGetProductByIdOxela(
  vars: GetProductByIdOxelaVariables,
  options?: useDataConnectQueryOptions<GetProductByIdOxelaData>
): UseDataConnectQueryResult<
  GetProductByIdOxelaData,
  GetProductByIdOxelaVariables
>;
export function useGetProductByIdOxela(
  dc: DataConnect,
  vars: GetProductByIdOxelaVariables,
  options?: useDataConnectQueryOptions<GetProductByIdOxelaData>
): UseDataConnectQueryResult<
  GetProductByIdOxelaData,
  GetProductByIdOxelaVariables
>;

export function useSEosOxela(
  options?: useDataConnectQueryOptions<SEosOxelaData>
): UseDataConnectQueryResult<SEosOxelaData, undefined>;
export function useSEosOxela(
  dc: DataConnect,
  options?: useDataConnectQueryOptions<SEosOxelaData>
): UseDataConnectQueryResult<SEosOxelaData, undefined>;

export function useGetSeoByIdOxela(
  vars: GetSeoByIdOxelaVariables,
  options?: useDataConnectQueryOptions<GetSeoByIdOxelaData>
): UseDataConnectQueryResult<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
export function useGetSeoByIdOxela(
  dc: DataConnect,
  vars: GetSeoByIdOxelaVariables,
  options?: useDataConnectQueryOptions<GetSeoByIdOxelaData>
): UseDataConnectQueryResult<GetSeoByIdOxelaData, GetSeoByIdOxelaVariables>;
