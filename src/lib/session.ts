"use client";

export const setSession = () => {
  document.cookie = "session=loggedin; path=/;";
};

export const clearSession = () => {
  document.cookie = "session=; Max-Age=0; path=/;";
};

export const hasSession = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("session=loggedin");
};
