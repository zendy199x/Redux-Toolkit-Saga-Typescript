import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AdminLayout } from './components/Layout';

function App() {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/admin/dashboard" />
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
