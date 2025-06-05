const {
  insertProductOxelaWithImageRef,
  getfeaturedImagesOxelaRef,
  getProductsOxelaRef,
  getProductByIdOxelaRef,
  sEosOxelaRef,
  getSeoByIdOxelaRef,
  connectorConfig
} = require('../index.cjs.js');
const { validateArgs, CallerSdkTypeEnum } = require('firebase/data-connect');
const {
  useDataConnectQuery,
  useDataConnectMutation,
  validateReactArgs
} = require('@tanstack-query-firebase/react/data-connect');

exports.useInsertProductOxelaWithImage =
  function useInsertProductOxelaWithImage(dcOrOptions, options) {
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
  };

exports.useGetfeaturedImagesOxela = function useGetfeaturedImagesOxela(
  dcOrOptions,
  options
) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = getfeaturedImagesOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
};

exports.useGetProductsOxela = function useGetProductsOxela(
  dcOrOptions,
  options
) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = getProductsOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
};

exports.useGetProductByIdOxela = function useGetProductByIdOxela(
  dcOrVars,
  varsOrOptions,
  options
) {
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
};

exports.useSEosOxela = function useSEosOxela(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts } = validateReactArgs(
    connectorConfig,
    dcOrOptions,
    options
  );
  const ref = sEosOxelaRef(dcInstance);
  return useDataConnectQuery(ref, inputOpts, CallerSdkTypeEnum.GeneratedReact);
};

exports.useGetSeoByIdOxela = function useGetSeoByIdOxela(
  dcOrVars,
  varsOrOptions,
  options
) {
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
};
