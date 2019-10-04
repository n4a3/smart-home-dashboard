import {
  addDecorator,
  addParameters,
  configure,
  setAddon
} from '@storybook/react';
import JSXAddon, { jsxDecorator } from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable);
addDecorator(jsxDecorator);
setAddon(JSXAddon);
addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right'
  }
});

// automatically import all files ending in *.stories.tsx
configure(
  require.context('../src/components', true, /\.stories\.tsx?$/),
  module
);
