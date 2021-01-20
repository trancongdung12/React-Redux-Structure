import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const UserTypes = makeConstantCreator(
  'USER_INFO',
  'USER_INFO_SUCCESS',
  'USER_EDIT',
  'USER_EDIT_SUCCESS',
  'USER_CHANGE_PASSWORD',
);

const userInfo = () => makeActionCreator(UserTypes.USER_INFO);

const userInfoSuccess = (response) => makeActionCreator(UserTypes.USER_INFO_SUCCESS, { response });

const userEdit = (data) => makeActionCreator(UserTypes.USER_EDIT, { data });

const userEditSuccess = (response) => makeActionCreator(UserTypes.USER_EDIT_SUCCESS, { response });

const userChangePassword = (data) => makeActionCreator(UserTypes.USER_CHANGE_PASSWORD, { data });

export default {
  userInfo,
  userInfoSuccess,
  userChangePassword,
  userEdit,
  userEditSuccess,
};
