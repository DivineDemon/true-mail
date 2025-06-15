import { Outlet } from "react-router-dom";

import AuthBG from "@/assets/img/auth-bg.svg";

import ModeToggle from "../mode-toggle";
import ThemeProvider from "../theme-provider";

const AuthLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative grid h-screen w-full grid-cols-2 overflow-hidden">
        <div className="absolute top-5 right-5 z-[1]">
          <ModeToggle />
        </div>
        <div className="col-span-1 w-full">
          <img
            src={AuthBG}
            alt="auth-bg-image"
            className="w-full object-cover"
          />
        </div>
        <div className="col-span-1 h-screen w-full">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
