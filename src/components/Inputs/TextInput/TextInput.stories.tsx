import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';
import { withKnobs, select } from '@storybook/addon-knobs';

const options = {
  'W/o validation': null,
  Valid: false,
  Invalid: true
};

storiesOf('Components|TextInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <TextInput
      value={'Sample text'}
      onChange={() => {}}
      hasError={select('Validation', options, null)}
    />
  ));
