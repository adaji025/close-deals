import { Route, Routes } from "react-router-dom";
import Home from "@pages/Unathenticated/Home";
import Login from "@pages/Unathenticated/auth/Login";
import ForgotPassword from "@pages/Unathenticated/auth/ForgotPassword";
import VeryOtp from "@pages/Unathenticated/auth/Otp";
import ResetPassword from "@pages/Unathenticated/auth/ResetPassword";
import Register from "@pages/Unathenticated/auth/Register";

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VeryOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default Unauthenticated;
