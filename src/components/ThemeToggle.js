import React from "react";
import "../styles/theme-toggle.css";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkMode ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;
