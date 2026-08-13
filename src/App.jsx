import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/dashboard/Dashboard";
export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
