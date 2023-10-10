// import React from 'react'
// import { useNavigate } from 'react-router'
// import { useState, useEffect } from "react"
// import { TextField, Button, Stack } from "@mui/material";

// const Login = (props) => {
//     const navigate = useNavigate();
  
//     console.log(props, 'login component props')
  
//     const [state, setState] = useState({
//       username: "",
//       password: "",
//     });

//     const handleTextChange = (e) => {
//         const { name, value } = e.target;
//         setState((prevState) => {
//           return {
//             ...prevState,
//             [name]: value,
//           };
//         });
//       };
    
//       const login = (e) => {
//         e.preventDefault();
    
      
//         // check db and verify uname and pwd hash
//         // if true, generate the siged token
//         // set cookie here only if I have signed on
//         // set loggedIn = true and max-age = 60*1000 (one minute)
    
//         document.cookie = "loggedIn=true;max-age=60*1000";
    
//         navigate("/dashboard");
//       };
    
//       return (
//         <div className="login">
         
//             <Stack
//               gap={2}
//               margin={0}
//               sx={{ width: "100%", height: "100%" }}
//               component={"form"}
//               onSubmit={login}
//             >
//               <TextField
//                 required
//                 onChange={handleTextChange}
//                 value={state.username}
//                 name="username"
//                 label="Username"
//                 type="text"
//               />
//               <TextField
//                 required
//                 onChange={handleTextChange}
//                 value={state.password}
//                 name="password"
//                 label="Password"
//                 type="password"
//               />
//               <Button
//                 type="submit"
//                 className="login-button"
//                 variant="contained"
//                 color="primary"
//               >
//                 Login
//               </Button>
//             </Stack>
//         </div>
//       );
//     };
    
//     export default Login;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
      

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        myCerts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = (props) => {
  const navigate = useNavigate();
    
  console.log(props, 'login component props')

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();

  
    // check db and verify uname and pwd hash
    // if true, generate the siged token
    // set cookie here only if I have signed on
    // set loggedIn = true and max-age = 60*1000 (one minute)

    document.cookie = "loggedIn=true;max-age=60*6000";

    navigate("/dashboard");
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3" >
            myCerts
          </Typography>
          {/* <Toolbar sx={{margin:'auto'}}>
            <img src="/mycerts.svg" alt="logo" />
        </Toolbar> */}
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
        }
      

export default Login;