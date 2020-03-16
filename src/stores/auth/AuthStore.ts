import { RootStore } from '../RootStore';
import { observable, computed, action } from 'mobx';
import { register, login, logout } from '../../api/ls-api';
import { FormStore } from './FormStore';

export class AuthStore {
  readonly rootStore: RootStore;
  readonly formStore: FormStore;

  @observable
  private authorizedUser: string | null = JSON.parse(
    localStorage.getItem('authorized') || 'null'
  );
  @observable
  private isLoading = false;
  @observable
  private errorType: string | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.formStore = new FormStore(this);
  }

  @computed
  get name() {
    return this.authorizedUser;
  }

  @computed
  get error() {
    return this.errorType;
  }

  @computed
  get loading() {
    return this.isLoading;
  }

  @action
  register = async (email: string, password: string, name: string) => {
    this.clearError();
    this.setLoading(true);
    try {
      const res = await register(email, password, name);
      if (res) {
        window.location.replace('#/login');
        this.login(email, password);
      }
    } catch (error) {
      this.setError(error);
      this.setLoading(false);
    }
  };

  @action
  login = async (email: string, password: string) => {
    this.clearError();
    this.setLoading(true);
    try {
      const res: string = await login(email, password);
      this.setLoading(false);
      if (res) {
        this.setUser(res);
        window.location.replace('#/dashboard');
        return true;
      } else {
        this.setError('Email or password is incorrect!');
        return false;
      }
    } catch (error) {
      this.setError(error);
    }
    this.setLoading(false);
    return null;
  };

  @action
  logout = () => {
    this.clearUser();
    logout();
    window.location.replace('#/login');
  };

  @action
  private setLoading = (state: boolean) => {
    this.isLoading = state;
  };

  @action
  private setError = (error: string) => {
    this.errorType = error;
    window.addEventListener('popstate', this.clearError);
  };

  @action
  setUser = (user: string) => {
    this.authorizedUser = user;
  };

  @action
  clearUser = () => {
    this.authorizedUser = null;
  };

  @action
  private clearError = () => {
    this.errorType = null;
    window.removeEventListener('popstate', this.clearError);
  };
}
