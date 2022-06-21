const {
  REACT_APP_STAGE,
  REACT_APP_IS_LOCAL_CONNECTION,
  REACT_APP_SEMANTIC_LAYER_API,
  REACT_APP_SEMANTIC_LAYER_LOCAL_API,
  REACT_APP_PREFERENCES_API,
  REACT_APP_PREFERENCES_LOCAL_API,
} = process.env;

const isLocalConnection: boolean = REACT_APP_IS_LOCAL_CONNECTION === 'true';

const semanticDataLayerPath = isLocalConnection
  ? REACT_APP_SEMANTIC_LAYER_LOCAL_API
  : REACT_APP_SEMANTIC_LAYER_API;

const preferenceDataLayerPath = isLocalConnection
  ? REACT_APP_PREFERENCES_LOCAL_API
  : REACT_APP_PREFERENCES_API;

export default {
  STAGE: REACT_APP_STAGE,
  SEMANTIC_LAYER_API_PATH: semanticDataLayerPath,
  PREFERENCES_LAYER_API_PATH: preferenceDataLayerPath,
};