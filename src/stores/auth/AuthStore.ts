import { RootStore } from '../RootStore';
import { observable, computed } from 'mobx';
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

  register = async (email: string, password: string, name: string) => {
    this.clearError();
    this.isLoading = true;
    try {
      const res = await register(email, password, name);
      if (res) {
        window.location.replace('#/login');
        this.login(email, password);
      }
    } catch (error) {
      this.setError(error);
      this.isLoading = false;
    }
  };

  login = async (email: string, password: string) => {
    this.clearError();
    this.isLoading = true;
    try {
      const res = await login(email, password);
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

  logout = () => {
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
