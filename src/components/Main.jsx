import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./comp.css";

function MainApp() {
   const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("auth")) || {};

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleLogout = () => {
    localStorage.setItem("auth", JSON.stringify({ isLoggedIn: false }));
    navigate("/");
  };
  const createtodo = () => {
    // Logic to create a todo can be added here
    
    navigate("/C-Todo"); // Redirect to a todo page if needed
  };
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="head">Welcome, {auth.username || "User"}!</h1>         
          <button onClick={createtodo} className="button">New Todo</button><br></br><br></br>
          <button onClick={handleLogout}>Logout</button>
          
        </div>
      </div>
    </div>
    
  );
}

export default MainApp;