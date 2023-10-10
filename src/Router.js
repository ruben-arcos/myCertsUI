import React from "react";
import { Routes, Route } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };
  
//   Write ProtectedRoute function here
//   const ProtectedRoute = (props) => {
//     const { component: Component, ...rest } = props;
//     return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
//   };
  
  const Router = () => {
      return (
          <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        );
  }
  
  export default Router;