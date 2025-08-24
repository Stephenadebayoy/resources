/** @format */

import { createContext, useState, useEffect, type ReactNode } from "react";

type DarkModeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

type DarkModeProviderProps = { children: ReactNode };

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(!prefersDark);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setIsDark(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };
