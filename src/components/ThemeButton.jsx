import React, { useEffect, useState } from "react";
import sunLogo from "/images/icon-sun.svg";
import moonLogo from "/images/icon-moon.svg";

function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(false);
  const htmlElement = document.querySelector("html");
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    htmlElement.classList.remove("dark", "light");
    if (darkTheme === false) {
      htmlElement.classList.add("light");
    } else {
      htmlElement.classList.add("dark");
    }
  };

  return (
    <>
      <button onClick={toggleTheme}>
        {darkTheme ? (
          <img
            src={moonLogo}
            alt="Moon icon"
            className="w-6 h-6 cursor-pointer"
          />
        ) : (
          <img
            src={sunLogo}
            alt="Sun icon"
            className="w-6 h-6 cursor-pointer"
          />
        )}
      </button>
    </>
  );
}

export default ThemeButton;
