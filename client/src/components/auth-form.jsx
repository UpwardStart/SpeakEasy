import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@mui/material"

export default function AuthForm(props) {
  const handleRegister = (event) => {
    event.preventDefault();
    const { action } = props;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email);
    console.log(password);
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          props.onSignIn(result);
        }
      });
  }

  return (
    <Grid container justify="center">
     <Box>
       <form onSubmit={handleRegister}>
         <Grid>
           <Grid>
            <FormControl>
              <TextField
                aria-label="email"
                label="Email"
                name="email"
                type="text"
                required
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <TextField
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
            </FormControl>
          </Grid>
          <Grid>
            <Button type="submit" size="large">
              Sign-up
            </Button>
          </Grid>
         </Grid>
       </form>
     </Box>
    </Grid>
  )
}
