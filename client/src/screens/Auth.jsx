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
    height: "100vh"
  },
  loginContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    maxWidth: { xs: 300, md: 250 },
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
          variant="h2">
          {welcomeMessage}
        </Typography>
        <AuthForm
          action={action}
          onSignIn={onSignIn} />
      </Box>
    </Box>
  );

}
