import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText
} from "@mui/material"

export default const Login = (props) => {
  const { user, register } = props;

  return (
    <Grid container justify="center">
     <Box>
       <Typography>Welcome!</Typography>
       <form onSubmit={handleRegister}>
         <FormControl>
           <TextField
             aria-label="email"
             label="Email"
             name="email"
             type="text"
             required
           />
         </FormControl>
         <FormControl>
           <TextField
             aria-label="password"
             label="Password"
             type="password"
             inputProps={{ minLength: 6 }}
             name="password"
             required
          />
          <FormHelperText>
             {formErrorMessage.confirmPassword}
          </FormHelperText>
        </FormControl>
        <Button type="submit" size="large">
          Sign-up
        </Button>
       </form>
     </Box>
    </Grid>
  )
}
