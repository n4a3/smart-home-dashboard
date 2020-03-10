import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

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
      false ? (
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
