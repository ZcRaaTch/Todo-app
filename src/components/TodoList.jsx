import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  removeCompleted,
} from "../store/todoSlice";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";
import { CustomButton } from "./componentExport";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const filters = useSelector((state) => state.todos.filters);

  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filters === "Active") return !todo.completed;
    if (filters === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="w-[85%] lg:w-[45%] sm:w-[75%] md:w-[50%] mx-auto min-h-[250px] max-h-[260px] -translate-y-[12.6rem]">
      <ul className="list-none rounded-lg overflow-hidden flex-col divide-y-[1px]">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="m-0 flex gap-4 w-full min-h-[50px] p-3 px-4 bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]"
          >
            <label className="cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="hidden peer"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
              />
              {/* Custom checkbox (Unchecked by default) */}
              <div className="w-5 h-5 border-[1px] border-gray-400 rounded-full  flex items-center justify-center peer-checked:bg-gradient-to-r from-[var(--color-grad-1)] to-[var(--color-grad-2)] ">
                <img
                  src={checkIcon}
                  alt="Checked"
                  className={`w-3 h-3 ${
                    todo.completed ? "opacity-100" : "opacity-0"
                  } `}
                />
              </div>
            </label>
            <p
              className={`w-full flex-1 self-center ${
                todo.completed
                  ? "line-through text-[var(--color-light-secondary-3)] dark:text-[var(--color-dark-secondary-5)]"
                  : "font-medium text-white"
              }`}
            >
              {todo.text}
            </p>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="cursor-pointer"
            >
              <img src={crossIcon} alt="delete icon" className="w-5 h-4" />
            </button>
          </li>
        ))}
        <li className="flex w-full p-3 justify-between  bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
          <p className="text-[0.9rem]">
            {todos.filter((todo) => !todo.completed).length} items left
          </p>
          <CustomButton
            type="button"
            classname="text-[0.9rem]"
            onClick={() => dispatch(removeCompleted())}
          >
            Clear Completed
          </CustomButton>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
