import { ReactComponent as AnalyticsIcon } from '../../../assets/nav-analytics.svg';
import { ReactComponent as DevicesIcon } from '../../../assets/nav-devices.svg';
import { ReactComponent as GalleryIcon } from '../../../assets/nav-gallery.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/nav-history.svg';
import { ReactComponent as OverviewIcon } from '../../../assets/nav-overview.svg';
import { ReactComponent as RulesIcon } from '../../../assets/nav-rules.svg';
import { ReactComponent as NavSettingsIcon } from '../../../assets/nav-settings.svg';

import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';

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
    component: Overview,
    extras: {
      component: Button,
      props: {
        skin: ButtonSkins.CIRCLE,
        onClick: () => rootStore.dashboardStore.openModal('add'),
        children: PlusIcon
      }
    }
  },
  {
    path: 'analitycs',
    name: 'Analitycs',
    icon: GalleryIcon,
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
    path: 'rules',
    name: 'Rules',
    icon: HistoryIcon,
    component: Overview,
    extras: {
      component: Button,
      props: {
        skin: ButtonSkins.CIRCLE,
        onClick: () => rootStore.dashboardStore.openModal('add'),
        children: PlusIcon
      }
    }
  },
  {
    path: 'gallery',
    name: 'Gallery',
    icon: OverviewIcon,
    component: Overview,
    extras: {
      component: Button,
      props: {
        skin: ButtonSkins.CIRCLE,
        onClick: () => rootStore.dashboardStore.openModal('add'),
        children: PlusIcon
      }
    }
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
