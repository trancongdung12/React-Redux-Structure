import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './LoginRedux/sagas';
import userSages from './UserRedux/sagas';

export default function* root() {
  yield all([...appSagas, ...loginSagas, ...userSages]);
}
