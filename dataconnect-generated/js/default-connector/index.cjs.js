const {
  queryRef,
  executeQuery,
  mutationRef,
  executeMutation,
  validateArgs
} = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'p6--oxela--firebase-root-service',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const insertProductOxelaWithImageRef = (dcOrVars, vars) => {
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
exports.insertProductOxelaWithImageRef = insertProductOxelaWithImageRef;

exports.insertProductOxelaWithImage = function insertProductOxelaWithImage(
  dcOrVars,
  vars
) {
  return executeMutation(insertProductOxelaWithImageRef(dcOrVars, vars));
};

const getfeaturedImagesOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getfeaturedImagesOxela');
};
getfeaturedImagesOxelaRef.operationName = 'getfeaturedImagesOxela';
exports.getfeaturedImagesOxelaRef = getfeaturedImagesOxelaRef;

exports.getfeaturedImagesOxela = function getfeaturedImagesOxela(dc) {
  return executeQuery(getfeaturedImagesOxelaRef(dc));
};

const getProductsOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'getProductsOxela');
};
getProductsOxelaRef.operationName = 'getProductsOxela';
exports.getProductsOxelaRef = getProductsOxelaRef;

exports.getProductsOxela = function getProductsOxela(dc) {
  return executeQuery(getProductsOxelaRef(dc));
};

const getProductByIdOxelaRef = (dcOrVars, vars) => {
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
exports.getProductByIdOxelaRef = getProductByIdOxelaRef;

exports.getProductByIdOxela = function getProductByIdOxela(dcOrVars, vars) {
  return executeQuery(getProductByIdOxelaRef(dcOrVars, vars));
};

const sEosOxelaRef = (dc) => {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'sEOSOxela');
};
sEosOxelaRef.operationName = 'sEOSOxela';
exports.sEosOxelaRef = sEosOxelaRef;

exports.sEosOxela = function sEosOxela(dc) {
  return executeQuery(sEosOxelaRef(dc));
};

const getSeoByIdOxelaRef = (dcOrVars, vars) => {
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
exports.getSeoByIdOxelaRef = getSeoByIdOxelaRef;

exports.getSeoByIdOxela = function getSeoByIdOxela(dcOrVars, vars) {
  return executeQuery(getSeoByIdOxelaRef(dcOrVars, vars));
};
