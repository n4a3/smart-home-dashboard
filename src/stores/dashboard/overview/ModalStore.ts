import { computed, action, observable } from 'mobx';
import { RootStore, rootStore } from '../../RootStore';
import SettingsStore from './SettingsStore';
import { ModalTabs } from '../../../types/ModalTabs';

class ModalStore {
  @observable
  selectedModalTab: ModalTabs = ModalTabs.SECTIONS;
  @observable
  sectionsStatus = {
    ...this.settingsStore.overviewSettings.sections.map(
      setting => setting.checked
    )
  };

  @observable
  selectedLayout: number = this.settingsStore.overviewSettings.layout;

  @computed
  get isModalOpened() {
    return rootStore.dashboardStore.isModalOpened('settings');
  }

  @computed
  get sections() {
    return this.settingsStore.overviewSettings.sections;
  }

  @computed
  get modalTabs() {
    return [...Object.values(ModalTabs).filter(t => typeof t === 'string')];
  }

  constructor(
    readonly rootStore: RootStore,
    readonly settingsStore: SettingsStore
  ) {
    this.rootStore = rootStore;
    this.settingsStore = settingsStore;
  }

  @action
  selectTab = (index: number) => {
    this.selectedModalTab = index;
  };

  @action
  closeModal = () => {
    this.rootStore.dashboardStore.closeModal('settings');
    this.selectTab(ModalTabs.SECTIONS);
    this.sectionsStatus = {
      ...this.settingsStore.overviewSettings.sections.map(
        setting => setting.checked
      )
    };
    this.selectedLayout = this.settingsStore.overviewSettings.layout;
  };

  @action
  saveSettings = () => {
    this.settingsStore.setOverviewSettings(
      this.sectionsStatus,
      this.selectedLayout
    );
  };

  @action
  selectLayout = (index: number) => {
    this.selectedLayout = index;
  };
}

export default ModalStore;
