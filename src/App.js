import "./App.css";
import Router from "./Router";

import Navigation from "./components/Navigation";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location, "location");
  console.log(location.pathname === "/signup", "pathname");
  return (
    <div className="App">
      {location.pathname === "/" ? null : location.pathname ===
        "/signup" ? null : (
        <Navigation />
      )}
      {/* {location.pathname !== "/signup"  && <Navigation />} */}
      <Router />
    </div>
  );
}

export default App;
