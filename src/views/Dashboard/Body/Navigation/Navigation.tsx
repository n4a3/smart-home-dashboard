import React from 'react';
import { observer } from 'mobx-react';
import { NavList } from './Navigation.styles';
import { rootStore } from '../../../../stores/RootStore';
import { routes } from '../routes';
import NavLink from '../../../../components/NavLink';

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const { isNavVisible } = rootStore.dashboardStore;
  return (
    <NavList isVisible={isNavVisible}>
      {routes.map((route, index) => {
        const Icon = route.icon;
        const tabIndex = isNavVisible ? 0 : -1;
        return (
          <NavLink
            to={`/dashboard/${route.path}`}
            key={index}
            tabIndex={tabIndex}
          >
            <Icon />
            {route.name}
          </NavLink>
        );
      })}
    </NavList>
  );
};

export default observer(Navigation);
