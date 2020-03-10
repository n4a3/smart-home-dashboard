import { action } from 'typesafe-actions';
import { MetaActionTypes, Modals } from './types';

export const actions = {
  toggleNav: () => action(MetaActionTypes.TOGGLE_NAV),
  openModal: (modal: Modals) => action(MetaActionTypes.OPEN_MODAL, modal),
  closeModal: (modal: Modals) => action(MetaActionTypes.CLOSE_MODAL, modal)
};
