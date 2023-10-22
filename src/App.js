import { useLocation } from "react-router-dom";

import Router from "./Router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const location = useLocation();
  console.log(location, "location");
  console.log(location.pathname === "/signup", "pathname");
  return (
    <div className="App">
      {/* {location.pathname === "/" ? null : location.pathname ===
        "/signup" ? null : (
        <Navigation />
      )} */}
      {/* {location.pathname !== "/signup"  && <Navigation />} */}
      <Router />
      {/* {location.pathname === "/dashboard" ? null : <Footer /> } */}
    </div>
  );
}

export default App;
