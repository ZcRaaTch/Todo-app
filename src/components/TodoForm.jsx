import React from "react";

function TodoForm() {
  return (
    <>
      <div className="mx-auto my-6 flex w-[85%] bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
        <button>+</button>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="border-none outline-none"
        />
      </div>
    </>
  );
}

export default TodoForm;
