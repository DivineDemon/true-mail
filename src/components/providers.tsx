import type { ReactNode } from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "@/store";

import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
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
