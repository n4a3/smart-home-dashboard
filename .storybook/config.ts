import { addParameters, configure } from '@storybook/react';
import theme from './theme';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme
  }
});

// automatically import all files ending in *.stories.tsx
configure(
  require.context('../src/components', true, /\.stories\.tsx?$/),
  module
);
