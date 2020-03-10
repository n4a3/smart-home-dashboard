import { ActionType, createReducer } from 'typesafe-actions';
import { IAuthState, AuthActionTypes } from './types';
import * as actions from './actions';

type AuthActionType = ActionType<typeof actions>;

const initialState: IAuthState = {
  authorizedUser: JSON.parse(localStorage.getItem('authorized') || 'null'),
  isLoading: false,
  errorType: null
};

export const authReducer = createReducer<IAuthState, AuthActionType>(
  initialState,
  {
    [AuthActionTypes.REGISTER_REQUEST]: state => ({
      ...state,
      isLoading: true,
      errorType: null
    }),
    [AuthActionTypes.REGISTER_SUCCESS]: state => ({
      ...state,
      isLoading: false
    }),
    [AuthActionTypes.REGISTER_FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      errorType: action.payload
    }),

    [AuthActionTypes.LOGIN_REQUEST]: state => ({
      ...state,
      isLoading: true,
      errorType: null
    }),
    [AuthActionTypes.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      authorizedUser: action.payload
    }),
    [AuthActionTypes.LOGIN_FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      errorType: action.payload
    }),

    [AuthActionTypes.LOGOUT]: state => ({
      ...state,
      authorizedUser: null
    })
  }
);
