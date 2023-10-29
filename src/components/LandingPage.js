import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      {/* <Sidebar> */}
      <h1>LandingPage</h1>
      {/* </Sidebar> */}
      <Footer fullWidth />
    </div>
  );
}
