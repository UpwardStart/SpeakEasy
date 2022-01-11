import React from 'react';
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Link,
} from "@mui/material"
import { Box } from '@mui/system';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  blueButton: {
    backgroundColor: blue,
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
}));

export default function AuthForm(props) {
  const { action } = props;
  const classes = useStyles();
  const link = action === 'sign-in'
    ? "#sign-up"
    : "#sign-in"
  const message = action === 'sign-in'
    ? "Don't have an account? Sign up instead!"
    : "Have an account? Sign in instead!";

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.email.value;
    const password = event.target.password.value;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.credentials && result.token) {
          props.onSignIn(result);
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ py: 2 }}>
          <FormControl>
            <TextField
              aria-label="email"
              label="Email"
              name="email"
              type="text"
              required
              style={{ width: 280 }}
            />
          </FormControl>
        </Box>
        <Box sx={{ py: 1 }}>
          <FormControl>
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              required
              style={{ width: 280 }}
            />
          </FormControl>
        </Box>
        <Box sx={{ py: 2 }}>
          <Grid container justifyContent="space-between" >
            <Grid item xs={8}>
              <Link href={link}>{message}</Link>
            </Grid>
            <Grid item>
              <Button type="submit" className={classes.blueButton}>
                { action }
              </Button>
            </Grid>
          </Grid>
        </Box>

      </form>
    </>
  )
}
