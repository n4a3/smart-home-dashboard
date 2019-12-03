import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { NavList } from './Navigation.styles';
import { rootStore } from '../../../../stores/RootStore';
import NavLink from '../../../../components/NavLink';

import { ReactComponent as Analytics } from '../../../../assets/nav-analytics.svg';
import { ReactComponent as Devices } from '../../../../assets/nav-devices.svg';
import { ReactComponent as Gallery } from '../../../../assets/nav-gallery.svg';
import { ReactComponent as History } from '../../../../assets/nav-history.svg';
import { ReactComponent as Overview } from '../../../../assets/nav-overview.svg';
import { ReactComponent as Rules } from '../../../../assets/nav-rules.svg';
import { ReactComponent as Settings } from '../../../../assets/nav-settings.svg';

interface INavigationProps {}

const routes = [
  { path: '', name: 'Overview', icon: Analytics, component: Fragment },
  { path: 'devices', name: 'Devices', icon: Devices, component: Fragment },
  { path: 'analitycs', name: 'Analitycs', icon: Gallery, component: Fragment },
  { path: 'rules', name: 'Rules', icon: History, component: Fragment },
  { path: 'gallery', name: 'Gallery', icon: Overview, component: Fragment },
  { path: 'history', name: 'History', icon: Rules, component: Fragment },
  { path: 'settings', name: 'Settings', icon: Settings, component: Fragment }
];

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <NavList isVisible={rootStore.dashboardStore.isNavVisible}>
      {routes.map((route, index) => {
        const Icon = route.icon;
        return (
          <NavLink to={`/dashboard/${route.path}`} key={index}>
            <Icon />
            {route.name}
          </NavLink>
        );
      })}
    </NavList>
  );
};

export default observer(Navigation);
