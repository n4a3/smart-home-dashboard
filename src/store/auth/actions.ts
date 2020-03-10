import { action, createAsyncAction } from 'typesafe-actions';
import { AuthActionTypes, IUserCreds } from './types';

export const actions = {
  register: (creds: IUserCreds) => action(AuthActionTypes.REGISTER, creds),
  login: (creds: IUserCreds) => action(AuthActionTypes.LOGIN, creds),
  logout: () => action(AuthActionTypes.LOGOUT)
};

export const registerAsync = createAsyncAction(
  AuthActionTypes.REGISTER_REQUEST,
  AuthActionTypes.REGISTER_SUCCESS,
  AuthActionTypes.REGISTER_FAILURE
)<undefined, undefined, string>();

export const loginAsync = createAsyncAction(
  AuthActionTypes.LOGIN_REQUEST,
  AuthActionTypes.LOGIN_SUCCESS,
  AuthActionTypes.LOGIN_FAILURE
)<undefined, string, string>();
