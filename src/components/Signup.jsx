import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 className="head">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Set Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Set Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit" className="button">Sign Up</button>
      </form>
      <br />
      <p>
        Already have an account? <Link to="/" className="link">Login</Link>
      </p>
    </div>
  );
}

export default Signup;