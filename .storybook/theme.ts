import { create } from '@storybook/theming';
import logo from '../src/assets/logo.svg';

export default create({
  base: 'dark',

  colorPrimary: '#3e4e6c',
  colorSecondary: '#44556b',

  // UI
  appBg: '#242e42',
  appContentBg: '#2f3b52',
  appBorderColor: '#2f3b52',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#1f8efa',
  barBg: '#3e4e6c',

  // Form colors
  inputBg: '#242e42',
  inputBorder: '#2f3b52',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,

  brandTitle: 'SmartHome Dashboard',
  brandUrl: 'https://github.com/n4a3/smart-home-dashboard',
  brandImage: logo
});
