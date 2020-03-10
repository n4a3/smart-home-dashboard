import { IApplicationState } from '../../store/types';

export const getIsLoading = (state: IApplicationState) => state.auth.isLoading;
export const getError = (state: IApplicationState) => state.auth.errorType;
export const getUser = (state: IApplicationState) => state.auth.authorizedUser;
