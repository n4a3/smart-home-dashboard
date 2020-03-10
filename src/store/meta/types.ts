export interface IMetaState {
  isLoading: boolean;
  errorType: string | null;

  isNavVisible: boolean;
  openedModals: Modals[];
}

export enum Modals {
  DASHBOARD_SETTINGS
}

export enum MetaActionTypes {
  TOGGLE_NAV = '@@meta/TOGGLE_NAV',

  OPEN_MODAL = '@@meta/OPEN_MODAL',
  CLOSE_MODAL = '@@meta/CLOSE_MODAL'
}
