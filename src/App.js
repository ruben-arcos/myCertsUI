import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Router from "./Router";


import "./App.css";

function App() {
  const location = useLocation();
  console.log(location, "location");
  console.log(location.pathname === "/signup", "pathname");
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
