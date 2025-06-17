import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  MdDarkMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      onClick={toggleTheme}
      aria-label="Toggle dark mode py-1"
      style={{ marginLeft: 12 }}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="text-gray-800 size-[25px] cursor-pointer hover:text-themepurple dark:hover:text-purple-300 transition hover:scale-125" />
      ) : (
        <MdOutlineDarkMode className="text-gray-800 size-[25px] cursor-pointer hover:text-themepurple transition hover:scale-125" />
      )}
    </div>
  );
};

export default ThemeToggle;
