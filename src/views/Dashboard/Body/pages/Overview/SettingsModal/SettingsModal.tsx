import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import Modal from '../../../../../../components/Modal';
import Tabs from '../../../../../../components/Tabs';
import { rootStore } from '../../../../../../stores/RootStore';
import {
  SettingsWrapper,
  Side,
  Divider,
  ButtonsWrapper
} from './SettingsModal.styles';
import Setting from '../../../../../../components/Setting';
import Toggle from '../../../../../../components/Toggle';
import Button from '../../../../../../components/Button';
import { ButtonSkins } from '../../../../../../types';

enum ModalTabs {
  SECTIONS,
  LAYOUT,
  OPTIONS
}

@observer
class SettingsModal extends Component {
  @observable
  private selectedModalTab: ModalTabs = ModalTabs.SECTIONS;
  @observable
  private settingsStatus = {
    ...rootStore.dashboardStore.settingsStore.overviewSettings.map(
      setting => setting.checked
    )
  };

  get settings() {
    return rootStore.dashboardStore.settingsStore.overviewSettings;
  }

  get modalTabs() {
    return [...Object.values(ModalTabs).filter(t => typeof t === 'string')];
  }

  @computed
  get isModalOpened() {
    return rootStore.dashboardStore.isModalOpened('settings');
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
            <Fragment>
              <Tabs
                items={this.modalTabs}
                selected={this.selectedModalTab}
                onSelect={this.selectTab}
              />
              <SettingsWrapper>
                <Side>
                  {this.settings.slice(0, 3).map((setting, index) => {
                    const checked = this.settingsStatus[index];
                    const onClick = () => {
                      this.settingsStatus[index] = !this.settingsStatus[index];
                    };
                    return (
                      <Setting
                        key={index}
                        title={setting.title}
                        description="Receive daily email notification any time."
                      >
                        <Toggle checked={checked} onClick={onClick} />
                      </Setting>
                    );
                  })}
                </Side>
                <Divider />
                <Side>
                  {this.settings.slice(3, 6).map((setting, index) => {
                    const checked = this.settingsStatus[index + 3];
                    const onClick = () => {
                      this.settingsStatus[index + 3] = !this.settingsStatus[
                        index + 3
                      ];
                    };
                    return (
                      <Setting
                        key={index}
                        title={setting.title}
                        description="Save all your information on a cloud service."
                      >
                        <Toggle checked={checked} onClick={onClick} />
                      </Setting>
                    );
                  })}
                </Side>
              </SettingsWrapper>
              <ButtonsWrapper>
                <Button skin={ButtonSkins.TRANSPARENT} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={onSave}>Save</Button>
              </ButtonsWrapper>
            </Fragment>
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
    this.settingsStatus = {
      ...rootStore.dashboardStore.settingsStore.overviewSettings.map(
        setting => setting.checked
      )
    };
  };

  private onSave = () => {
    rootStore.dashboardStore.settingsStore.setOverviewSettings(
      this.settingsStatus
    );
  };
}

export default SettingsModal;
