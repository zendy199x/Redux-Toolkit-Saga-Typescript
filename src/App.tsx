import { Button } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AdminLayout } from './components/Layout';

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>Logout</Button>
      <Switch>
        <Redirect exact from="/" to="/admin" />
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
