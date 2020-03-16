import React, { Fragment } from 'react';
import { Side, Divider } from './Sections.styles';
import Setting from '../../../../../../../components/Setting';
import Toggle from '../../../../../../../components/Toggle';
import { TSectionsSettings } from '../../../../../../../stores/dashboard/overview/SettingsStore';
import { observer } from 'mobx-react';

interface ISectionsProps {
  settings: TSectionsSettings;
  settingsStatus: boolean[];
}

const Sections: React.FC<ISectionsProps> = ({ settings, settingsStatus }) => {
  return (
    <Fragment>
      <Side>
        {settings.slice(0, 3).map((setting, index) => {
          const checked = settingsStatus[index];
          const onClick = () => {
            settingsStatus[index] = !settingsStatus[index];
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
        {settings.slice(3, 6).map((setting, index) => {
          const checked = settingsStatus[index + 3];
          const onClick = () => {
            settingsStatus[index + 3] = !settingsStatus[index + 3];
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
    </Fragment>
  );
};

export default observer(Sections);
