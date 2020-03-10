import { createReducer, ActionType } from 'typesafe-actions';
import { IMetaState, MetaActionTypes } from './types';
import * as actions from './actions';

type MetaActionType = ActionType<typeof actions>;

const initialState: IMetaState = {
  isLoading: false,
  errorType: null,

  isNavVisible: true,
  openedModals: []
};

export const metaReducer = createReducer<IMetaState, MetaActionType>(
  initialState,
  {
    [MetaActionTypes.TOGGLE_NAV]: (state: IMetaState) => ({
      ...state,
      isNavVisible: !state.isNavVisible
    }),

    [MetaActionTypes.OPEN_MODAL]: (state: IMetaState, action) => ({
      ...state,
      openedModals: [...state.openedModals, action.payload]
    }),
    [MetaActionTypes.CLOSE_MODAL]: (state: IMetaState, action) => {
      const idx = state.openedModals.indexOf(action.payload);
      const openedModals = [
        ...state.openedModals.slice(0, idx),
        ...state.openedModals.slice(idx + 1)
      ];

      return {
        ...state,
        openedModals
      };
    }
  }
);
