import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import Login from "./components/Login";
import Register from "./components/Register";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (isLoggedIn) {
    return <App onLogout={() => setIsLoggedIn(false)} />;
  }

  return showRegister ? (
    <Register
      onRegister={() => setIsLoggedIn(true)}
      goToLogin={() => setShowRegister(false)}
    />
  ) : (
    <Login
      onLogin={() => setIsLoggedIn(true)}
      goToRegister={() => setShowRegister(true)}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);