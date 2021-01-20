import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/Login/SignUp';
import ChangePassword from '../screens/Login/ChangePassword';
import Profile from '../screens/User/Profile';
import EditProfile from '../screens/User/EditProfile';

const SCREENS_WITH_REDUX = {
  Login,
  Home,
  SignUp,
  ChangePassword,
  Profile,
  EditProfile,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;

    return (
      <Provider {...props}>
        <PersistGate loading={true} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };
  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store,
    );
  });

  Object.keys(SCREENS).map((screenName) => {
    Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  });
}

export default registerScreens;
