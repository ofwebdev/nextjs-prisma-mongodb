// ThemeContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext({
  currentTheme: "business",
  toggleTheme: (theme: string) => {},
  resetTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<string>("business");

  // Function to toggle theme
  const toggleTheme = (theme: string) => {
    setCurrentTheme(theme);
    // Save the selected theme to local storage
    localStorage.setItem("theme", theme);
  };

  // Function to reset the theme to its default value
  const resetTheme = () => {
    setCurrentTheme("business"); // Set it to your default theme value
    // Remove the theme from local storage to reset it
    localStorage.removeItem("theme");
  };

  // Load the theme from local storage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const contextValue = {
    currentTheme,
    toggleTheme,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
