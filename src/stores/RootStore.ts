import { observable } from 'mobx';

class RootStore {
  @observable
  private isAuthorized = false;

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

  public getAuthStatus = () => {
    this.getAuthorizedFromLS();
    return this.isAuthorized;
  };
}

export const rootStore = new RootStore();
