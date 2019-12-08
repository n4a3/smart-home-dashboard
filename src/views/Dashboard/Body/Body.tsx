import React, { Fragment } from 'react';
import {
  Wrapper,
  RouteContainer,
  PageWrapper,
  PageHeader,
  PageTitle,
  PageExtras
} from './Body.styles';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router';
import { routes } from './routes';
import { observer } from 'mobx-react';
import { PoseGroup } from 'react-pose';

interface IBodyProps {}

const Body: React.FC<IBodyProps> = () => {
  return (
    <Wrapper>
      <Navigation />

      <PageWrapper>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      path={`/dashboard/${route.path}`}
                      exact
                      render={() => (
                        <Fragment>
                          <PageHeader>
                            <PageTitle>{route.name}</PageTitle>
                            <PageExtras>
                              {route.extras && (
                                <route.extras.component {...route.extras.props}>
                                  <route.extras.props.children />
                                </route.extras.component>
                              )}
                            </PageExtras>
                          </PageHeader>
                          <route.component />
                        </Fragment>
                      )}
                    />
                  ))}
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
      </PageWrapper>
    </Wrapper>
  );
};

export default observer(Body);
