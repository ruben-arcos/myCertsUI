import React from 'react'
import { useNavigate } from 'react-router'
import { useState, useEffect } from "react"
import { TextField, Button, Stack } from "@mui/material";

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
    
        document.cookie = "loggedIn=true;max-age=60*1000";
    
        navigate("/dashboard");
      };
    
      return (
        <div className="login">
         
            <Stack
              gap={2}
              margin={0}
              sx={{ width: "100%", height: "100%" }}
              component={"form"}
              onSubmit={login}
            >
              <TextField
                required
                onChange={handleTextChange}
                value={state.username}
                name="username"
                label="Username"
                type="text"
              />
              <TextField
                required
                onChange={handleTextChange}
                value={state.password}
                name="password"
                label="Password"
                type="password"
              />
              <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Stack>
        </div>
      );
    };
    
    export default Login;
