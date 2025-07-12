import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./comp.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, username }));
      navigate("/app");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="form-container">
      <h2 className="head">Login</h2>
      <form onSubmit={handleLogin} id="login-form">
        <input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit" className="button">Login</button>
      </form>
      <br />
      <p>Don't have an account? <Link to="/signup" className="link">SignUp</Link></p>
    </div>
  );
}

export default Login;