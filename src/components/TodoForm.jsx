import React from "react";

function TodoForm() {
  return (
    <>
      <div className="mx-auto my-6 flex gap-3 w-[85%] px-4 py-3.5 rounded-lg bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)] ">
        <button className="w-6 h-6 rounded-full flex items-center justify-center border text-[1rem] font-bold border-[var(--color-light-secondary-3)] dark:border-[var(--color-dark-secondary-5)] shadow-sm shadow-indigo-500  ">
          +
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="border-none outline-none block w-full"
        />
      </div>
    </>
  );
}

export default TodoForm;
