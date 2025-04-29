import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
