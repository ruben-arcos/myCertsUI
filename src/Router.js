import React from "react";
import { Routes, Route } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import CertificationHub from "./components/CertificationHub";
import LandingPage from "./components/LandingPage";

const Router = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard user={user} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/certificationhub" element={<CertificationHub user={user} />} />
    </Routes>
  );
};

export default Router;
