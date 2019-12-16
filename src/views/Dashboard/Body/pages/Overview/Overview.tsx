import React, { Fragment } from 'react';
import { Wrapper } from './Overview.styles';
import Tale from '../../../../../components/Tale';
import { rootStore } from '../../../../../stores/RootStore';
import { observer } from 'mobx-react';
import { PoseGroup } from 'react-pose';
import SettingsModal from './SettingsModal';

interface IOverviewProps {}

const Overview: React.FC<IOverviewProps> = () => {
  const { key, css } = rootStore.dashboardStore.currentOverviewMode;
  return (
    <Fragment>
      <PoseGroup preEnterPose="preEnter">
        <Wrapper withParent={false} areas={css} key={key}>
          {['camera', 'room', 'day', 'limit', 'units'].map(i => (
            <Tale key={i} gridName={i}>
              {i}
            </Tale>
          ))}
        </Wrapper>
      </PoseGroup>
      <SettingsModal />
    </Fragment>
  );
};

export default observer(Overview);
