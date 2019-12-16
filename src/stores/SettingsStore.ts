import { computed, observable } from 'mobx';
import DashboardStore from './DashboardStore';

type TOverviewSettings = Array<{ title: string; checked: boolean }>;

const defOverviewSettings = [
  { title: 'Camera', checked: true },
  { title: 'Consumption by room', checked: true },
  { title: 'Consumption by day', checked: true },
  { title: 'Devices limit', checked: true },
  { title: 'Status by units', checked: true },
  { title: 'Status by devices', checked: true }
];

class SettingsStore {
  @observable
  private _overviewSettings: TOverviewSettings;

  @computed
  public get overviewSettings() {
    return this._overviewSettings;
  }

  public constructor(readonly dashboardStore: DashboardStore) {
    this.dashboardStore = dashboardStore;
    const overviewSettings = localStorage.getItem('overviewSettings');
    if (overviewSettings) {
      this._overviewSettings = JSON.parse(overviewSettings);
    } else {
      localStorage.setItem(
        'overviewSettings',
        JSON.stringify(defOverviewSettings)
      );
      this._overviewSettings = defOverviewSettings;
    }
  }

  public setOverviewSettings = (newSettings: boolean[]) => {
    this._overviewSettings = this._overviewSettings.map((setting, index) => ({
      title: setting.title,
      checked: newSettings[index]
    }));
    localStorage.setItem(
      'overviewSettings',
      JSON.stringify(this._overviewSettings)
    );
  };
}

export default SettingsStore;
