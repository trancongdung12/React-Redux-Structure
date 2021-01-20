import Immutable from 'seamless-immutable';
import { UserTypes } from './actions';
import { makeReducerCreator } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  loading: null,
  data: null,
});

const userInfo = (state) =>
  state.merge({
    loading: true,
  });

const userInfoSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    data: response,
  });

const userEditSuccess = (state, { response }) =>
  state.merge({
    // loading: false,
    data: response,
  });
const ACTION_HANDLERS = {
  [UserTypes.USER_INFO]: userInfo,
  [UserTypes.USER_INFO_SUCCESS]: userInfoSuccess,
  [UserTypes.USER_EDIT_SUCCESS]: userEditSuccess,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
