import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
  'USER_REGISTER',
  'USER_REGISTER_SUCCESS',
  'USER_REGISTER_FAILURE',
);
//Login
const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });

const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });

const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });

//Register
const userRegister = (data) => makeActionCreator(LoginTypes.USER_REGISTER, { data });

const userRegisterSuccess = (token) =>
  makeActionCreator(LoginTypes.USER_REGISTER_SUCCESS, { token });

const userRegisterFailure = (error) =>
  makeActionCreator(LoginTypes.USER_REGISTER_FAILURE, { error });

//Logout
const userLogout = () => makeActionCreator(LoginTypes.USER_LOGOUT);
export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
  userRegister,
  userRegisterSuccess,
  userRegisterFailure,
};
