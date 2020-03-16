import { computed, observable } from 'mobx';
import DashboardStore from '../DashboardStore';
import { RootStore } from '../../RootStore';
import ModalStore from './ModalStore';

export type TSectionsSettings = Array<{ title: string; checked: boolean }>;

interface IOverviewSettings {
  sections: TSectionsSettings;
  layout: number;
}

const defSectionsSettings: TSectionsSettings = [
  { title: 'Camera', checked: true },
  { title: 'Consumption by room', checked: true },
  { title: 'Consumption by day', checked: true },
  { title: 'Devices limit', checked: true },
  { title: 'Status by units', checked: true },
  { title: 'Status by devices', checked: true }
];

class SettingsStore {
  readonly modalStore: ModalStore;

  @observable
  private sectionSettings: TSectionsSettings;
  @observable
  private layout = 0;

  @computed
  get overviewSettings(): IOverviewSettings {
    return {
      sections: this.sectionSettings,
      layout: this.layout
    };
  }

  constructor(
    readonly rootStore: RootStore,
    readonly dashboardStore: DashboardStore
  ) {
    this.rootStore = rootStore;
    this.dashboardStore = dashboardStore;
    this.modalStore = new ModalStore(rootStore, this);

    const overviewSettings = localStorage.getItem('overviewSettings');
    if (overviewSettings) {
      const data: IOverviewSettings = JSON.parse(overviewSettings);
      this.sectionSettings = data.sections;
      this.layout = data.layout;
    } else {
      const data: IOverviewSettings = {
        sections: defSectionsSettings,
        layout: this.layout
      };

      localStorage.setItem('overviewSettings', JSON.stringify(data));
      this.sectionSettings = data.sections;
    }
  }

  setOverviewSettings = (newSectionSettings: boolean[], newLayout: number) => {
    this.sectionSettings = this.sectionSettings.map((setting, index) => ({
      title: setting.title,
      checked: newSectionSettings[index]
    }));
    this.layout = newLayout;

    localStorage.setItem(
      'overviewSettings',
      JSON.stringify(this.overviewSettings)
    );
  };
}

export default SettingsStore;
