import React, { Fragment } from 'react';
import { NavList } from './Navigation.styles';
import NavLink from '../../../../components/NavLink';

interface INavigationProps {}

const routes = [
  { path: '', name: 'Overview', component: Fragment },
  { path: 'devices', name: 'Devices', component: Fragment },
  { path: 'analitycs', name: 'Analitycs', component: Fragment },
  { path: 'rules', name: 'Rules', component: Fragment },
  { path: 'gallery', name: 'Gallery', component: Fragment },
  { path: 'history', name: 'History', component: Fragment },
  { path: 'settings', name: 'Settings', component: Fragment }
];

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <NavList>
      {routes.map((route, index) => (
        <NavLink to={`/dashboard/${route.path}`} key={index}>
          {route.name}
        </NavLink>
      ))}
    </NavList>
  );
};

export default Navigation;
