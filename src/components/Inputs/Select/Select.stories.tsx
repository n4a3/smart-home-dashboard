import { storiesOf } from '@storybook/react';
import React from 'react';
import Select from './Select';
import { withKnobs, select } from '@storybook/addon-knobs';

const items = ['First item', 'Second item', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaa'];

const options = {
  Nothing: null,
  'First item': 0,
  'Second item': 1,
  Aaaaaaaaaaaaaaaaaaaaaaaaaaaa: 2
};

const onSelect = (index: number) => {
  console.log(items[index]);
};

storiesOf('Components|Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Select
      label="Select"
      items={items}
      onSelect={onSelect}
      selected={select('Selected item', options, null)}
    />
  ));
