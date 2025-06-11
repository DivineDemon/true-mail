import type { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      {window.location.pathname === "/" ? (
        children
      ) : (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      )}
    </BrowserRouter>
  );
};

export default Providers;
