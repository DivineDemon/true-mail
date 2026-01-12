import { getCookie, setCookie } from "cookies-next";

export const getMode = () => {
  return (getCookie("true-mail-mode") as "single" | "bulk") || "single";
};

export const setMode = (mode: "single" | "bulk") => {
  setCookie("true-mail-mode", mode);
};

export const getEmail = () => {
  return (getCookie("true-mail-email") as string) || "";
};

export const setEmail = (email: string) => {
  setCookie("true-mail-email", email);
};
