import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));

interface WidgetProps {
  title: string;
  children: React.ReactNode;
}

const Widget = ({ title, children }: WidgetProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="button">{title}</Typography>

      <Box mt={2}>{children}</Box>
    </Paper>
  );
};

export default Widget;
