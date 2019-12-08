import { observable, computed } from 'mobx';
import { RootStore } from './RootStore';

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
  @observable
  public isNavVisible = true;
  @observable
  private overviewMode: number = 0;
  @observable
  public openedModals: string[] = [];

  @computed
  public get currentOverviewMode() {
    return {
      key: this.overviewMode,
      css: modes[this.overviewMode]
    };
  }
  public constructor(readonly rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };

  public setOverviewMode = (idx: number) => {
    this.overviewMode = idx;
  };
}

export default DashboardStore;
