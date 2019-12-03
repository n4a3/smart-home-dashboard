import { observable } from 'mobx';
import { RootStore } from './RootStore';

class DashboardStore {
  rootStore: RootStore;

  @observable
  public isNavVisible = true;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public toggleNav = () => {
    this.isNavVisible = !this.isNavVisible;
  };
}

export default DashboardStore;
