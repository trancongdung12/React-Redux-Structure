import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
);
export const RegisterTypes = makeConstantCreator(
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
const userRegister = (data) => makeActionCreator(RegisterTypes.USER_REGISTER, { data });

const userRegisterSuccess = (tokened) =>
  makeActionCreator(RegisterTypes.USER_REGISTER_SUCCESS, { tokened });

const userRegisterFailure = (error) =>
  makeActionCreator(RegisterTypes.USER_REGISTER_FAILURE, { error });

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
