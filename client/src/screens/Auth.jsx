import React from 'react';
import { Grid, Box, Typography }  from '@mui/material';
import AuthForm from '../components/auth-form';
import Redirect from '../components/redirect';

export default function Auth (props) {
  const { user, action, onSignIn } = props;

  if (user) return <Redirect to="" />;

  const welcomeMessage = action === 'sign-in'
    ? 'Welcome!' : 'Sign Up'

  return (
    <Grid container justify="center">
      <Box>
        <Typography>{welcomeMessage}</Typography>
      </Box>
      <AuthForm
        action={action}
        onSignIn={onSignIn} />
    </Grid>
  );

}
