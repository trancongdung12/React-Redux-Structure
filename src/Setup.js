import { Navigation } from 'react-native-navigation';
import { Alert } from 'react-native';
import { registerScreens } from './navigation/index';
import configureStore from './redux/store';
import { startup } from './redux/AppRedux/actions';

export let store = null;

const App = () => {
  const loadIntial = () => {
    return Promise.all([loadStore()])
      .then((response) => {
        store = response[0];

        store.dispatch(startup());
      })
      .catch((err) => {});
  };

  const loadStore = async () => {
    return new Promise((resolve) => {
      configureStore((tempStore, persistor) => {
        // configI18n(get(tempStore.getState(), 'app.language'));
        registerScreens(tempStore, persistor);
        resolve(tempStore, persistor);
      });
    });
  };

  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await loadIntial();
      Navigation.setDefaultOptions({
        layout: {
          backgroundColor: 'white',
          orientation: ['portrait'], // An array of supported orientations
        },
      });
    } catch (error) {
      //
      Alert.alert('Init unsuccessful', error.message);
    }
  });
};

export default App;
