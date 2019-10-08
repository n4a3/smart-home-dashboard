import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { Button } from './Button';

storiesOf('Components|Button', module)
  .add('Default', () => (
    <Button onClick={action('button-click')}>Button</Button>
  ))
  .add('Badge', () => (
    <Button badge onClick={action('button-click')}>
      See more info See more info See more info See more info
    </Button>
  ))
  .add('Circle', () => (
    <Button circle onClick={action('button-click')}>
      <Plus />
    </Button>
  ));
