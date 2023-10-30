import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import cookie from "cookie";
import Router from "./Router";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  console.log(location, "location");
  console.log(location.pathname === "/signup", "pathname");

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.token) {
      fetch("https://my-certs-backend.vercel.app/users/revalidate", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data)
          console.log(data, "user data");
        }); 
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="App">
      <Router user={user} setUser={setUser} />
    </div>
  );
}

export default App;
