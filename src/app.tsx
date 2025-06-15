import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/layouts/auth-layout";
import DashboardLayout from "./components/layouts/dashboard-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import Invoices from "./pages/billing/invoices";
import PaymentInformation from "./pages/billing/payment-information";
import Dashboard from "./pages/dashboard/dashboard";
import FileDetails from "./pages/dashboard/file-details";
import Help from "./pages/dashboard/help";
import Profile from "./pages/dashboard/profile";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/help" element={<Help />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/billing/invoices" element={<Invoices />} />
        <Route path="/dashboard/file-details/:id" element={<FileDetails />} />
        <Route
          path="/dashboard/billing/payment"
          element={<PaymentInformation />}
        />
      </Route>
    </Routes>
  );
};

export default App;
