import type { ReactNode } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "@/store";

import ThemeProvider from "./theme-provider";
import { Toaster } from "./ui/sonner";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Toaster richColors={true} duration={1500} />
          {window.location.pathname === "/" ? (
            children
          ) : (
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              {children}
            </ThemeProvider>
          )}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
