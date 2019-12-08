import React from 'react';
import { Wrapper } from './Overview.styles';
import Tale from '../../../../../components/Tale';
import { rootStore } from '../../../../../stores/RootStore';
import { observer } from 'mobx-react';
import { PoseGroup } from 'react-pose';

interface IOverviewProps {}

const Overview: React.FC<IOverviewProps> = () => {
  const { key, css } = rootStore.dashboardStore.currentOverviewMode;
  return (
    <PoseGroup preEnterPose="preEnter">
      <Wrapper withParent={false} areas={css} key={key}>
        {['camera', 'room', 'day', 'limit', 'units'].map(i => (
          <Tale key={i} gridName={i}>
            {i}
          </Tale>
        ))}
      </Wrapper>
    </PoseGroup>
  );
};

export default observer(Overview);
