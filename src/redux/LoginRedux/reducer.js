import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes, RegisterTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  errorRegister: null,
  loginResponse: null,
  token: null,
  loginType: '',
});
//Login
export const userLogin = (state) => state.merge({ loadingLogin: true });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

//Register
export const userRegister = (state) => state.merge({ loadingLogin: true });

export const userRegisterSuccess = (state, { tokened }) =>
  state.merge({
    loadingLogin: false,
    token: tokened,
  });

export const userRegisterFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });
//Logout
export const userLogout = (state) => state.merge({ token: null });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [RegisterTypes.USER_REGISTER]: userRegister,
  [RegisterTypes.USER_REGISTER_SUCCESS]: userRegisterSuccess,
  [RegisterTypes.USER_REGISTER_FAILURE]: userRegisterFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
