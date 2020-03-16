import DashboardStore from './dashboard/DashboardStore';
import { AuthStore } from './auth/AuthStore';

export class RootStore {
  readonly dashboardStore: DashboardStore;
  readonly authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.dashboardStore = new DashboardStore(this);
  }
}

export const rootStore = new RootStore();
