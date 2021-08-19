import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

const StudentFeature = () => {
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        {/* /admin/students */}
        <Route path={match.path} exact>
          <ListPage />
        </Route>

        <Route path={`${match.path}/add`}>
          <AddEditPage />
        </Route>

        <Route path={`${match.path}/:studentId`}>
          <AddEditPage />
        </Route>
      </Switch>
    </Box>
  );
};

export default StudentFeature;
