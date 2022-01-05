import React from 'react';
import { makeStyles }  from '@mui/styles';
import AuthForm from '../components/auth-form';
import Redirect from '../components/redirect';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",

  }

}))


export default function Auth (props) {
  const classes = useStyles();
  const { user, action, onSignIn } = props;

  if (user) return <Redirect to="" />;

  const welcomeMessage = action === 'sign-in'
    ? 'Welcome!' : 'Sign Up'

  return (
    <Box className={classes.root}>
      <Box className={classes.loginContainer}>
        <Typography
          variant="h2"
          sx={{ py: 2 }}>
          {welcomeMessage}
        </Typography>
        <AuthForm
          action={action}
          onSignIn={onSignIn} />
      </Box>
    </Box>
  );

}
