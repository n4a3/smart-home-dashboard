import DashboardStore from './DashboardStore';
import { AuthStore } from './AuthStore';

export class RootStore {
  readonly dashboardStore: DashboardStore;
  readonly authStore: AuthStore;

  public constructor() {
    this.authStore = new AuthStore(this);
    this.dashboardStore = new DashboardStore(this);
  }
}

export const rootStore = new RootStore();
