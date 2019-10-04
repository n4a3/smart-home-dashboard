import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf('Components|TextInput', module).add('default', () => (
  <TextInput value={'asd'} onChange={() => {}} />
));
