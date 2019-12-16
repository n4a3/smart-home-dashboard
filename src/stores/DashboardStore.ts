import { observable, computed } from 'mobx';
import { RootStore } from './RootStore';
import SettingsStore from './SettingsStore';

const modes: [string, string, string][] = [
  [
    '"camera camera camera room room"',
    '"camera camera camera day limit"',
    '"units units units units units"'
  ],
  [
    '"room room camera camera camera"',
    '"day limit camera camera camera"',
    '"units units units units units"'
  ]
];

class DashboardStore {
  settingsStore: SettingsStore;

  @observable
  public isNavVisible = true;
  @observable
  private overviewMode: number = 0;
  @observable
  private openedModals: string[] = [];

  @computed
  public get currentOverviewMode() {
    return {
      key: this.overviewMode,
      css: modes[this.overviewMode]
    };
  }

  public constructor(readonly rootStore: RootStore) {
    this.rootStore = rootStore;
    this.settingsStore = new SettingsStore(this);
  }

  public toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };

  public setOverviewMode = (idx: number) => {
    this.overviewMode = idx;
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
