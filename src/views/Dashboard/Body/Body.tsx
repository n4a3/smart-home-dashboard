import { observer } from 'mobx-react';
import React, { Fragment } from 'react';
import { PoseGroup } from 'react-pose';
import { Route, Switch } from 'react-router';
import { rootStore } from '../../../stores/RootStore';
import {
  PageExtras,
  PageHeader,
  PageTitle,
  PageWrapper,
  RouteContainer,
  Wrapper
} from './Body.styles';
import Navigation from './Navigation';
import { routes } from './routes';

interface IBodyProps {}

const Body: React.FC<IBodyProps> = () => {
  return (
    <Wrapper>
      <Navigation />

      <PageWrapper isNavVisible={rootStore.dashboardStore.isNavVisible}>
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
