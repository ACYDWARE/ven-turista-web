"use client";
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  const
    element = typeof document !== 'undefined' ? document.documentElement : null;

  useEffect(() => {
    localStorage.setItem("theme", theme!);

    if (theme === "dark") {
      element?.classList.add("dark");
    } else {
      element?.classList.remove("light");
      element?.classList.remove("dark");
    }
  }, [theme, element]);

  return (
    <>
      {theme === "dark" ? (
        <FaMoon onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <FaSun onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode