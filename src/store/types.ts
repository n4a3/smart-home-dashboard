import { IMetaState } from './meta/types';
import { IAuthState } from './auth/types';

export interface IApplicationState {
  meta: IMetaState;
  auth: IAuthState;
}
