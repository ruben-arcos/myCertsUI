import "./App.css";
import Router from "./Router";

import Navigation from "./components/Navigation";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location, "location");
  return (
    <div className="App">
      {location.pathname !== "/"  && <Navigation />}
      <Router />
    </div>
  );
}

export default App;
