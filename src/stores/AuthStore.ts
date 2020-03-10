import { RootStore } from './RootStore';
import { observable, computed } from 'mobx';
import { register, login, logout } from '../api/ls-api';

export class AuthStore {
  rootStore: RootStore;

  @observable
  private authorizedUser: string | null = JSON.parse(
    localStorage.getItem('authorized') || 'null'
  );
  @observable
  private isLoading = false;
  @observable
  private errorType: string | null = null;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed
  public get name() {
    return this.authorizedUser;
  }

  @computed
  public get error() {
    return this.errorType;
  }

  @computed
  public get loading() {
    return this.isLoading;
  }

  public register = async (creds: {
    email: string;
    password: string;
    name: string;
  }) => {
    this.clearError();
    this.isLoading = true;
    try {
      const res = await register(creds);
      if (res) {
        window.location.replace('#/login');
        this.login(creds);
      }
    } catch (error) {
      this.setError(error);
      this.isLoading = false;
    }
  };

  public login = async (creds: { email: string; password: string }) => {
    this.clearError();
    this.isLoading = true;
    try {
      const res = await login(creds);
      this.isLoading = false;
      if (res) {
        this.authorizedUser = res;
        window.location.replace('#/dashboard');
        return true;
      } else {
        this.setError('Email or password is incorrect!');
        return false;
      }
    } catch (error) {
      this.setError(error);
    }
    this.isLoading = false;
    return null;
  };

  public logout = () => {
    this.authorizedUser = null;
    logout();
    window.location.replace('#/login');
  };

  private setError = (error: string) => {
    this.errorType = error;
    window.addEventListener('popstate', this.clearError);
  };

  private clearError = () => {
    this.errorType = null;
    window.removeEventListener('popstate', this.clearError);
  };
}
