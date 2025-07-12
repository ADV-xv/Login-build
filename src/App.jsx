import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import MainApp from "./components/Main.jsx"; 
import CreateTodo from "./components/C-Todo.jsx";
 
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/C-Todo" element={<CreateTodo />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;