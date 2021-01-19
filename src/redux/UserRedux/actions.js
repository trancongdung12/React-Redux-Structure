import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const UserTypes = makeConstantCreator('USER_INFO', 'USER_INFO_SUCCESS');

const userInfo = () => makeActionCreator(UserTypes.USER_INFO);
const userInfoSuccess = (response) => makeActionCreator(UserTypes.USER_INFO_SUCCESS, { response });
export default {
  userInfo,
  userInfoSuccess,
};
