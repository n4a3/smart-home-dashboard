import { action, createAsyncAction } from 'typesafe-actions';
import { AuthActionTypes, IUserCreds } from './types';

export const register = (creds: IUserCreds) =>
  action(AuthActionTypes.REGISTER, creds);

export const registerAsync = createAsyncAction(
  AuthActionTypes.REGISTER_REQUEST,
  AuthActionTypes.REGISTER_SUCCESS,
  AuthActionTypes.REGISTER_FAILURE
)<undefined, undefined, string>();

export const login = (creds: IUserCreds) =>
  action(AuthActionTypes.LOGIN, creds);

export const loginAsync = createAsyncAction(
  AuthActionTypes.LOGIN_REQUEST,
  AuthActionTypes.LOGIN_SUCCESS,
  AuthActionTypes.LOGIN_FAILURE
)<undefined, string, string>();

export const logout = () => action(AuthActionTypes.LOGOUT);
