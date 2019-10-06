import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TextInput from './TextInput';

const options = {
  'W/o validation': null,
  Valid: false,
  Invalid: true
};

storiesOf('Components|TextInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <TextInput
      label="Text"
      value={'Sample text'}
      onChange={() => {}}
      //@ts-ignore
      hasError={select('Validation', options, null)}
    />
  ));
