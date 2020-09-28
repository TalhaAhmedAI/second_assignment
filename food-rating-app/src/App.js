import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Routing from "./routing";

function App() {
  const [state, setState] = useState({ user: "" });
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setState({ user });
    } catch (error) {}
  }, []);
  console.log(state.user);
  return (
    <div>
      <NavBar user={state.user} />
      <Routing />
    </div>
  );
}

export default App;
