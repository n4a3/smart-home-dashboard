import React, { Component } from 'react';
import { observer } from 'mobx-react';
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
import { ModalTabs } from '../../../../../../types/ModalTabs';

@observer
class SettingsModal extends Component {
  get modalStore() {
    return rootStore.dashboardStore.settingsStore.modalStore;
  }

  render() {
    return (
      <Modal
        isOpened={this.modalStore.isModalOpened}
        onClose={this.modalStore.closeModal}
        title="Overview Page Settings"
      >
        {(onClose: () => void) => {
          const onSave = () => {
            this.modalStore.saveSettings();
            onClose();
          };
          return (
            <ModalWrapper>
              <Tabs
                items={this.modalStore.modalTabs}
                selected={this.modalStore.selectedModalTab}
                onSelect={this.modalStore.selectTab}
              />
              {this.modalStore.selectedModalTab === ModalTabs.SECTIONS && (
                <SettingsWrapper>
                  <Sections
                    settings={this.modalStore.sections}
                    settingsStatus={this.modalStore.sectionsStatus}
                  />
                </SettingsWrapper>
              )}
              {this.modalStore.selectedModalTab === ModalTabs.LAYOUT && (
                <Layout
                  selected={this.modalStore.selectedLayout}
                  onSelect={this.modalStore.selectLayout}
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
}

export default SettingsModal;
