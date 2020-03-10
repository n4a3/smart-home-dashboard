import { IApplicationState } from '../../store/types';
import { Modals } from './types';

export const getIsModalOpened = (state: IApplicationState, modal: Modals) =>
  state.meta.openedModals.includes(modal);
