import { observable, computed } from 'mobx';
import { RootStore } from './RootStore';
import SettingsStore from './SettingsStore';
import { gridLayouts } from '../constants/girdLayouts';

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

  constructor(readonly rootStore: RootStore) {
    this.rootStore = rootStore;
    this.settingsStore = new SettingsStore(this);
  }

  toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };

  isModalOpened = (key: string) => this.openedModals.indexOf(key) !== -1;

  openModal = (key: string) => {
    this.openedModals.push(key);
  };

  closeModal = (key: string) => {
    const idx = this.openedModals.indexOf(key);
    if (idx !== -1) {
      this.openedModals.splice(idx, 1);
    }
  };

  closeAllModals = () => {
    this.openedModals = [];
  };
}

export default DashboardStore;
