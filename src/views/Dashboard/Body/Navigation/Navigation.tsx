import React from 'react';
import { observer } from 'mobx-react';
import { NavList } from './Navigation.styles';
import { rootStore } from '../../../../stores/RootStore';
import { routes } from '../routes';
import NavLink from '../../../../components/NavLink';

interface INavigationProps {}

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
