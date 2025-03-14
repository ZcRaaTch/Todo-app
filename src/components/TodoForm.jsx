import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="mx-auto mb-5 mt-10 flex gap-3 w-[85%] sm:w-[75%] lg:w-[45%] md:w-[50%] px-4 py-3.5 lg:py-4 rounded-lg bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)] lg:text-xl"
      >
        <button
          type="submit"
          className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border text-[1rem] font-bold border-[var(--color-light-secondary-3)] dark:border-[var(--color-dark-secondary-5)] shadow-sm shadow-indigo-500  "
        >
          +
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="border-none outline-none block w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodoHandler(e);
          }}
        />
      </form>
    </>
  );
}

export default TodoForm;
