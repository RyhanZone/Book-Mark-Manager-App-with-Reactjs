import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/dashboard/Dashboard";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="signup" element={<SignUp />}></Route>
          <Route exact path="forgot-password" element={<ForgotPassword />}></Route>
          <Route exact path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
