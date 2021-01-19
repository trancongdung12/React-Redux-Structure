import { takeLatest, select } from 'redux-saga/effects';
import { AppTypes } from '../AppRedux/actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';

export function* startupSaga() {
  try {
    const token = yield select((state) => state.login.token);

    http.setAuthorizationHeader(token);

    if (token) {
      NavigationUtils.startMainContent();
    } else {
      // NavigationUtils.startLoginContent();
      NavigationUtils.startLoginContent();
    }
  } catch (error) {
    NavigationUtils.startLoginContent();
    console.log(error);
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
