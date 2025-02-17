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
          <img src={moonLogo} alt="Sun Logo" className="w-6 h-6" />
        ) : (
          <img src={sunLogo} alt="Moon Logo" className="w-6 h-6 " />
        )}
      </button>
    </>
  );
}

export default ThemeButton;
