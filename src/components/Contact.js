import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cookie from "cookie";

import { useNavigate } from "react-router";
import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
    return (
        <ThemeProvider theme={defaultTheme}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
          </Box>
            <CssBaseline />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(174.2deg, rgba(255, 244, 228, 1) 7.1%, rgba(240, 246, 238, 1) 67.4%)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -1, // Ensure this is behind other content
              }}
            />
             <Container
            component="main"
            maxWidth="xs"
            sx={{ backgroundColor: "#fff",  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
          >
            <Box
              sx={{
                marginTop: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src="../mycertslogin.svg"
                alt="logo"
                style={{ margin: "30px 0 10px 0", width: "140px" }}
              />
              {/* </Box> */}
    
              <Typography
                component="h1"
                variant="h5"
                style={{ textAlign: "left", width: "100%" }}
                // style={{ position: "absolute", left: 750 }}
              >
                sign in
              </Typography>
              <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                <TextField
                  id="standard-basic"
                  label="email"
                  variant="standard"
                  margin="normal"
                  required
                  onChange={handleTextChange}
                  value={state.email}
                  name="email"
                  fullWidth
                  autoFocus
                  autoComplete="email"
                />
                <TextField
                  id="standard-basic"
                  label="password"
                  variant="standard"
                  margin="normal"
                  required
                  onChange={handleTextChange}
                  value={state.password}
                  name="password"
                  type="password"
                  fullWidth
                  autoFocus
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
    
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
          <Footer fullWidth={true} />
        </ThemeProvider>
      );
    };
