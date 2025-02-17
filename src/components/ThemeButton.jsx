import React, { useState } from "react";
import sunLogo from "/images/icon-sun.svg";
import moonLogo from "/images/icon-moon.svg";

function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(false);
  const htmlElement = document.querySelector("html");
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    htmlElement.classList.remove("dark", "light");
    darkTheme
      ? htmlElement.classList.add("dark")
      : htmlElement.classList.add("light");
  };
  return (
    <>
      <button onClick={toggleTheme}>
        {darkTheme ? (
          <img src={sunLogo} alt="Sun Logo" className="w-6 h-6" />
        ) : (
          <img src={moonLogo} alt="Moon Logo" className="w-6 h-6" />
        )}
      </button>
    </>
  );
}

export default ThemeButton;
