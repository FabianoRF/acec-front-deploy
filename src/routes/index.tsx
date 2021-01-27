import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DashboardAffiliated from '../pages/DashboardAffiliated';

import Dashboard from '../pages/admin/Dashboard';
import SignUp from '../pages/SignUp';
import EditAffiliated from '../pages/admin/EditAffiliated';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} path="/" exact />
      <Route component={SignUp} path="/register" />

      <Route component={DashboardAffiliated} path="/dashboard" />

      <Route component={SignUp} path="/adm/register" isPrivate />
      <Route component={Dashboard} path="/adm/dashboard" isPrivate />
      <Route
        component={EditAffiliated}
        path="/adm/edit-affiliated/:id"
        isPrivate
      />
    </Switch>
  );
};

export default Routes;