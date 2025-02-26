import React from "react";

function CustomButton({ children, type = "button", classname = "", ...props }) {
  return (
    <>
      <button
        type={type}
        className={` border-none outline-none appearance-none cursor-pointer ${classname}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default CustomButton;
