import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/layouts/auth-layout";
import DashboardLayout from "./components/layouts/dashboard-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import Dashboard from "./pages/dashboard/dashboard";
import VerifyEmail from "./pages/dashboard/verify-email";
import Landing from "./pages/landing";

const App = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
