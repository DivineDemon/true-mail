"use client";

import { getCookie, setCookie } from "cookies-next";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "single" | "bulk";

interface GlobalContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  email: string;
  setEmail: (email: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("single");
  const [email, setEmailState] = useState<string>("");

  useEffect(() => {
    const cookieMode = getCookie("true-mail-mode") as Mode;
    const cookieEmail = getCookie("true-mail-email") as string;
    if (cookieMode) setModeState(cookieMode);
    if (cookieEmail) setEmailState(cookieEmail);
  }, []);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    setCookie("true-mail-mode", newMode);
  };

  const setEmail = (newEmail: string) => {
    setEmailState(newEmail);
    setCookie("true-mail-email", newEmail);
  };

  return (
    <GlobalContext.Provider value={{ mode, setMode, email, setEmail }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
