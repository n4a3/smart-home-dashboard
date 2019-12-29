import { ReactComponent as AnalyticsIcon } from '../../../assets/nav-analytics.svg';
import { ReactComponent as DevicesIcon } from '../../../assets/nav-devices.svg';
import { ReactComponent as GalleryIcon } from '../../../assets/nav-gallery.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/nav-history.svg';
import { ReactComponent as OverviewIcon } from '../../../assets/nav-overview.svg';
import { ReactComponent as RulesIcon } from '../../../assets/nav-rules.svg';
import { ReactComponent as NavSettingsIcon } from '../../../assets/nav-settings.svg';

import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg';

import Overview from './pages/Overview';

import Button from '../../../components/Button';
import { ButtonSkins } from '../../../types';
import { rootStore } from '../../../stores/RootStore';

export const routes = [
  {
    path: '',
    name: 'Overview',
    icon: AnalyticsIcon,
    component: Overview,
    extras: {
      component: Button,
      props: {
        skin: ButtonSkins.ICON,
        onClick: () => rootStore.dashboardStore.openModal('settings'),
        children: SettingsIcon
      }
    }
  },
  {
    path: 'devices',
    name: 'Devices',
    icon: DevicesIcon,
    component: Overview
  },
  {
    path: 'analitycs',
    name: 'Analitycs',
    icon: GalleryIcon,
    component: Overview
  },
  {
    path: 'rules',
    name: 'Rules',
    icon: HistoryIcon,
    component: Overview
  },
  {
    path: 'gallery',
    name: 'Gallery',
    icon: OverviewIcon,
    component: Overview
  },
  {
    path: 'history',
    name: 'History',
    icon: RulesIcon,
    component: Overview
  },
  {
    path: 'settings',
    name: 'Settings',
    icon: NavSettingsIcon,
    component: Overview
  }
];
