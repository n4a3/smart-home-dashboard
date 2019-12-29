import { observable, computed } from 'mobx';
import { RootStore } from './RootStore';
import SettingsStore from './SettingsStore';
import { gridLayouts } from '../constants/girdLayouts';

class DashboardStore {
  readonly settingsStore: SettingsStore;

  @observable
  public isNavVisible = true;
  @observable
  private openedModals: string[] = [];

  @computed
  public get currentOverviewMode() {
    const current = this.settingsStore.overviewSettings.layout;
    return {
      key: current,
      css: gridLayouts[current]
    };
  }

  public constructor(readonly rootStore: RootStore) {
    this.rootStore = rootStore;
    this.settingsStore = new SettingsStore(this);
  }

  public toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };

  public isModalOpened = (key: string) => this.openedModals.indexOf(key) !== -1;

  public openModal = (key: string) => {
    this.openedModals.push(key);
  };

  public closeModal = (key: string) => {
    const idx = this.openedModals.indexOf(key);
    if (idx !== -1) {
      this.openedModals.splice(idx, 1);
    }
  };

  public closeAllModals = () => {
    this.openedModals = [];
  };
}

export default DashboardStore;
