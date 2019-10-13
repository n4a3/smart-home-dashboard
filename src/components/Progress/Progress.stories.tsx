import { storiesOf } from '@storybook/react';
import React from 'react';
import Progress from './Progress';
import { ReactComponent as Icon } from '../../assets/storage.svg';

storiesOf('Components|Progress', module)
  .add('Default', () => <Progress percent={44} />)
  .add('With icon', () => <Progress percent={60} icon={Icon} />);
