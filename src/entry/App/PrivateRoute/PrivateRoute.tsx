import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { rootStore } from '../../../stores/RootStore';

interface IProps {
  component: any;
}

type IPrivateRouteProps = RouteProps & IProps;

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      rootStore.authStore.name ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
