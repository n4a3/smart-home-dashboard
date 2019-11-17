import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import Button from './Button';
import { ButtonSkins } from '../../types';

storiesOf('Components|Button', module)
  .add('Default', () => (
    <Button onClick={action('button-click')}>Button</Button>
  ))
  .add('Badge', () => (
    <Button skin={ButtonSkins.BADGE} onClick={action('button-click')}>
      See more info See more info See more info See more info
    </Button>
  ))
  .add('Circle', () => (
    <Button skin={ButtonSkins.CIRCLE} onClick={action('button-click')}>
      <Plus />
    </Button>
  ))
  .add('Link', () => (
    <Button skin={ButtonSkins.TRANSPARENT} onClick={action('button-click')}>
      Text
    </Button>
  ));
