import AsyncStorage from '@react-native-community/async-storage';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';

const transformerConfig = {
  whitelistPerReducer: {
    login: 'token',
  },
};

const reduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['login'],
  blacklist: [],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

export default reduxPersist;
