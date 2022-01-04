import React from 'react';
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Link,
} from "@mui/material"
import { Box } from '@mui/system';

export default function AuthForm(props) {
  const { action } = props;
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
        <Box>
          <FormControl>
            <TextField
              aria-label="email"
              label="Email"
              name="email"
              type="text"
              required
              fullWidth
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              required
              fullWidth
            />
          </FormControl>
        </Box>
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Link href={link}>{message}</Link>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" size="large">
                { action.toUpperCase() }
              </Button>
            </Grid>
          </Grid>
        </Box>

      </form>
    </>
  )
}
