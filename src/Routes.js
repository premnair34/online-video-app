import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import {
  Home as HomeView,
  Events as EventsView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={ HomeView }
        exact
        layout={ Main }
        path={["/", "/home"]}
      />
       <RouteWithLayout
        component={ EventsView }
        exact
        layout={ Main }
        path="/events"
      />
    </Switch>
  );
};

      /* <Route path='/404' component={HomeView} /> */
// <RouteWithProtected
//   component={ProductListView}
//   exact
//   layout={MainLayout}
//   path="/product"
// />
// <RouteWithLayout
//   component={NotFoundView}
//   exact
//   layout={MinimalLayout}
//   path="/not-found"
// />

export default Routes;
