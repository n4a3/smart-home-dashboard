export interface IAuthState {
  authorizedUser: string | null;
  isLoading: boolean;
  errorType: string | null;
}

export interface IUserCreds {
  email: string;
  password: string;
  name: string;
}

export enum AuthActionTypes {
  REGISTER = '@@auth/REGISTER',
  REGISTER_REQUEST = '@@auth/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@auth/REGISTER_FAILURE',

  LOGIN = '@@auth/LOGIN',
  LOGIN_REQUEST = '@@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@@auth/LOGIN_FAILURE',

  LOGOUT = '@@auth/LOGOUT'
}
