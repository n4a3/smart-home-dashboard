import { observable, computed, action } from 'mobx';
import { RootStore } from '../RootStore';
import SettingsStore from './overview/SettingsStore';
import { gridLayouts } from '../../constants/girdLayouts';

class DashboardStore {
  readonly settingsStore: SettingsStore;

  @observable
  isNavVisible = true;
  @observable
  private openedModals: string[] = [];

  @computed
  get currentOverviewMode() {
    const current = this.settingsStore.overviewSettings.layout;
    return {
      key: current,
      css: gridLayouts[current]
    };
  }

  isModalOpened = (key: string) => this.openedModals.indexOf(key) !== -1;

  constructor(readonly rootStore: RootStore) {
    this.rootStore = rootStore;
    this.settingsStore = new SettingsStore(rootStore, this);
  }

  @action
  toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };

  @action
  openModal = (key: string) => {
    this.openedModals.push(key);
  };

  @action
  closeModal = (key: string) => {
    const idx = this.openedModals.indexOf(key);
    if (idx !== -1) {
      this.openedModals.splice(idx, 1);
    }
  };

  @action
  closeAllModals = () => {
    this.openedModals = [];
  };
}

export default DashboardStore;
