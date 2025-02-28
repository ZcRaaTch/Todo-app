import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/todoSlice";
import { CustomButton } from "./componentExport";

function Filter() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.filters);
  return (
    <>
      <div className="w-[85%] lg:w-[45%] sm:w-[75%] md:w-[50%] mx-auto my-6 p-3 px-8 rounded-lg flex justify-center gap-4 bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
        <CustomButton
          onClick={() => dispatch(setFilter("All"))}
          classname={`${
            activeFilter === "All" ? "text-[var(--color-brighter-blue)]" : ""
          }`}
        >
          All
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(setFilter("Active"))}
          classname={`${
            activeFilter === "Active" ? "text-[var(--color-brighter-blue)]" : ""
          }`}
        >
          Active
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(setFilter("Completed"))}
          classname={`${
            activeFilter === "Completed"
              ? "text-[var(--color-brighter-blue)]"
              : ""
          }`}
        >
          Completed
        </CustomButton>
      </div>
    </>
  );
}

export default Filter;
