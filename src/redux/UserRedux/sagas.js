import { takeLatest, put, call } from 'redux-saga/effects';
import userActions, { UserTypes } from './actions';
import { NavigationUtils } from '../../navigation';
import { userInfoApi } from '../../api/auth';
export function* userInfoSaga() {
  try {
    const response = yield call(userInfoApi);
    NavigationUtils.startProfile();
    yield put(userActions.userInfoSuccess(response.data));
  } catch (error) {
    console.log(error);
    // yield put(LoginActions.userLoginFailure(error));
  }
  // yield put(startup());
}

const userSagas = () => {
  return [takeLatest(UserTypes.USER_INFO, userInfoSaga)];
};

export default userSagas();
