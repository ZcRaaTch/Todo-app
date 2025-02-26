import React from "react";
import { CustomButton } from "./componentExport";

function Filter() {
  return (
    <>
      <div className="w-[85%] mx-auto my-6 p-3 px-8 rounded-lg flex justify-center gap-4 bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
        <CustomButton>All</CustomButton>
        <CustomButton>Active</CustomButton>
        <CustomButton>Completed</CustomButton>
      </div>
    </>
  );
}

export default Filter;
