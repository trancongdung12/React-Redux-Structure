import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes, RegisterTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi, userRegisterApi } from '../../api/auth';

export function* userLoginSaga({ data }) {
  // try {
  //   const response = yield call(userLoginApi, data);
  //   const newResponse = {
  //     data: response.data,
  //     token: response.data.token,
  //   };
  //   yield put(LoginActions.userLoginSuccess(newResponse));
  //   yield put(startup());
  // } catch (error) {
  //   console.log(error);
  //   yield put(LoginActions.userLoginFailure(error));
  // }
  yield put(startup());
}
export function* userRegisterSaga({ data }) {
  try {
    const response = yield call(userRegisterApi, data);
    yield put(LoginActions.userRegisterSuccess(response.data.token));
    yield put(startup());
  } catch (error) {
    yield put(LoginActions.userRegisterFailure(error));
    console.log(error);
  }
}
export function* userLogoutSaga() {
  yield put(startup());
}

const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSaga),
  takeLatest(RegisterTypes.USER_REGISTER, userRegisterSaga),
];

export default loginSagas();
