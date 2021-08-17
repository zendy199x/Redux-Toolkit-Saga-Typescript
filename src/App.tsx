import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { AdminLayout } from './components/Layout';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  })

  return (
    <Switch>
      <PrivateRoute path="/login">
        <LoginPage />
      </PrivateRoute>

      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <PrivateRoute>
        <NotFound />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
