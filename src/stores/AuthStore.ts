import { RootStore } from './RootStore';
import { observable } from 'mobx';

export class AuthStore {
  rootStore: RootStore;

  @observable
  private isAuthorized = false;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  public get authStatus() {
    this.getAuthorizedFromLS();
    return this.isAuthorized;
  }

  public getAuthorizedFromLS = () => {
    const key = localStorage.getItem('authorized');
    const value: boolean = key !== null ? JSON.parse(key) : false;

    if (value === true || value === false) {
      this.isAuthorized = value;
    } else {
      this.isAuthorized = false;
    }

    this.setAuthorizedToLS();
  };

  public setAuthorizedToLS = () => {
    localStorage.setItem('authorized', JSON.stringify(this.isAuthorized));
  };
}
