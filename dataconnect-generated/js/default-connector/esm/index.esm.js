import {
  queryRef,
  executeQuery,
  mutationRef,
  executeMutation,
  validateArgs
} from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'p6--oxela--firebase-root-service',
  location: 'us-central1'
};

export const insertProductOxelaWithImageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars } = validateArgs(
    connectorConfig,
    dcOrVars,
    vars,
    true
  );
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertProductOxelaWithImage', inputVars);
};
insertProductOxelaWithImageRef.operationName = 'InsertProductOxelaWithImage';

export function insertProductOxelaWithImage(dcOrVars, vars) {
  return executeMutation(insertProductOxelaWithImageRef(dcOrVars, vars));
}

export const getfeaturedImagesOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getfeaturedImagesOxela');
};
getfeaturedImagesOxelaRef.operationName = 'getfeaturedImagesOxela';

export function getfeaturedImagesOxela(dc) {
  return executeQuery(getfeaturedImagesOxelaRef(dc));
}

export const getProductsOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getProductsOxela');
};
getProductsOxelaRef.operationName = 'getProductsOxela';

export function getProductsOxela(dc) {
  return executeQuery(getProductsOxelaRef(dc));
}

export const getProductByIdOxelaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars } = validateArgs(
    connectorConfig,
    dcOrVars,
    vars,
    true
  );
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getProductByIdOxela', inputVars);
};
getProductByIdOxelaRef.operationName = 'getProductByIdOxela';

export function getProductByIdOxela(dcOrVars, vars) {
  return executeQuery(getProductByIdOxelaRef(dcOrVars, vars));
}

export const sEosOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'sEOSOxela');
};
sEosOxelaRef.operationName = 'sEOSOxela';

export function sEosOxela(dc) {
  return executeQuery(sEosOxelaRef(dc));
}

export const getSeoByIdOxelaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars } = validateArgs(
    connectorConfig,
    dcOrVars,
    vars,
    true
  );
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getSEOByIdOxela', inputVars);
};
getSeoByIdOxelaRef.operationName = 'getSEOByIdOxela';

export function getSeoByIdOxela(dcOrVars, vars) {
  return executeQuery(getSeoByIdOxelaRef(dcOrVars, vars));
}
