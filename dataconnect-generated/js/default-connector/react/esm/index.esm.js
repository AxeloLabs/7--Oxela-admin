import {
  insertProductOxelaWithImageRef,
  getfeaturedImagesOxelaRef,
  getProductsOxelaRef,
  getProductByIdOxelaRef,
  sEosOxelaRef,
  getSeoByIdOxelaRef,
  connectorConfig
} from '../../esm/index.esm.js';
import { validateArgs, CallerSdkTypeEnum } from 'firebase/data-connect';
import {
  useDataConnectQuery,
  useDataConnectMutation,
  validateReactArgs
} from '@tanstack-query-firebase/react/data-connect';

export function useInsertProductOxelaWithImage(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  function refFactory(vars) {
    return insertProductOxelaWithImageRef(dcInstance, vars);
  }
  return useDataConnectMutation(
    refFactory,
    inputOpts,
    CallerSdkTypeEnum.GeneratedReact
  );
}

export function useGetfeaturedImagesOxela(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = getfeaturedImagesOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetProductsOxela(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = getProductsOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetProductByIdOxela(dcOrVars, varsOrOptions, options) {
  const {
    dc: dcInstance,
    vars: inputVars,
    options: inputOpts
  } = validateReactArgs(
    connectorConfig,
    dcOrVars,
    varsOrOptions,
    options,
    true,
    true
  );
  const ref = getProductByIdOxelaRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useSEosOxela(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = sEosOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

export function useGetSeoByIdOxela(dcOrVars, varsOrOptions, options) {
  const {
    dc: dcInstance,
    vars: inputVars,
    options: inputOpts
  } = validateReactArgs(
    connectorConfig,
    dcOrVars,
    varsOrOptions,
    options,
    true,
    true
  );
  const ref = getSeoByIdOxelaRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}
