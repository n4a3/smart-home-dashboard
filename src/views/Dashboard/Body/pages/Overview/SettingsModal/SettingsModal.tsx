import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import Modal from '../../../../../../components/Modal';
import Tabs from '../../../../../../components/Tabs';
import { rootStore } from '../../../../../../stores/RootStore';
import {
  SettingsWrapper,
  ButtonsWrapper,
  ModalWrapper
} from './SettingsModal.styles';
import Button from '../../../../../../components/Button';
import { ButtonSkins } from '../../../../../../types';
import Sections from './Sections/Sections';
import Layout from './Layout';

enum ModalTabs {
  SECTIONS,
  LAYOUT
}

@observer
class SettingsModal extends Component {
  @observable
  private selectedModalTab: ModalTabs = ModalTabs.SECTIONS;
  @observable
  private sectionsStatus = {
    ...rootStore.dashboardStore.settingsStore.overviewSettings.sections.map(
      setting => setting.checked
    )
  };
  @observable
  private selectedLayout: number =
    rootStore.dashboardStore.settingsStore.overviewSettings.layout;

  @computed
  get isModalOpened() {
    return rootStore.dashboardStore.isModalOpened('settings');
  }

  get sections() {
    return rootStore.dashboardStore.settingsStore.overviewSettings.sections;
  }

  get modalTabs() {
    return [...Object.values(ModalTabs).filter(t => typeof t === 'string')];
  }

  public render() {
    return (
      <Modal
        isOpened={this.isModalOpened}
        onClose={this.closeModal}
        title="Overview Page Settings"
      >
        {(onClose: () => void) => {
          const onSave = () => {
            this.onSave();
            onClose();
          };
          return (
            <ModalWrapper>
              <Tabs
                items={this.modalTabs}
                selected={this.selectedModalTab}
                onSelect={this.selectTab}
              />
              {this.selectedModalTab === ModalTabs.SECTIONS && (
                <SettingsWrapper>
                  <Sections
                    settings={this.sections}
                    settingsStatus={this.sectionsStatus}
                  />
                </SettingsWrapper>
              )}
              {this.selectedModalTab === ModalTabs.LAYOUT && (
                <Layout
                  selected={this.selectedLayout}
                  onSelect={this.selectLayout}
                />
              )}
              <ButtonsWrapper>
                <Button skin={ButtonSkins.TRANSPARENT} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={onSave}>Save</Button>
              </ButtonsWrapper>
            </ModalWrapper>
          );
        }}
      </Modal>
    );
  }

  private selectTab = (index: number) => {
    this.selectedModalTab = index;
  };

  private closeModal = () => {
    rootStore.dashboardStore.closeModal('settings');
    this.selectTab(ModalTabs.SECTIONS);
    this.sectionsStatus = {
      ...rootStore.dashboardStore.settingsStore.overviewSettings.sections.map(
        setting => setting.checked
      )
    };
    this.selectedLayout =
      rootStore.dashboardStore.settingsStore.overviewSettings.layout;
  };

  private onSave = () => {
    rootStore.dashboardStore.settingsStore.setOverviewSettings(
      this.sectionsStatus,
      this.selectedLayout
    );
  };

  private selectLayout = (index: number) => {
    this.selectedLayout = index;
  };
}

export default SettingsModal;
