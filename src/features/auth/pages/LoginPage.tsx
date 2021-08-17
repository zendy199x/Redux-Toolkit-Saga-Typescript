import { makeStyles, Paper, Typography, Box, Button } from '@material-ui/core'
import { useAppDispatch } from 'app/hooks';
import React from 'react'
import { authActions } from '../authSlice';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },

  box: {
    padding: theme.spacing(3)
  }
}))

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    // TODO: Get username + pwd from login form
    dispatch(authActions.login({
      username: '',
      password: '',
    }))
  }

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">Student Management</Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage