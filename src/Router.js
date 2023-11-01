import React from "react";
import { Navigate, Routes, Route } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import CertificationHub from "./components/CertificationHub";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["token"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute component={Dashboard} user={user} />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/certificationhub"
        element={< ProtectedRoute component={CertificationHub} user={user} />}
      />
       <Route
        path="/contact-us"
        element={< ProtectedRoute component={ContactUs} user={user} />}
      />
    </Routes>
  );
};

export default Router;
