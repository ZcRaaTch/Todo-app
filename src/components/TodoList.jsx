import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";
import CustomButton from "./CustomButton";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[85%] mx-auto min-h-[250px] max-h-[260px] -translate-y-[12.6rem]">
        <ul className="list-none rounded-lg overflow-hidden flex-col divide-y-[1px]">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="m-0 flex gap-4 w-full p-3 px-4 bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]"
            >
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="hidden peer" />
                {/* Custom checkbox (Unchecked by default) */}
                <div className="w-5 h-5 border-[1px] border-gray-400 rounded-full  flex items-center justify-center peer-checked:bg-gradient-to-r from-[var(--color-grad-1)] to-[var(--color-grad-2)] ">
                  <img
                    src={checkIcon}
                    alt="Checked"
                    className="w-3 h-3 opacity-0 peer-checked:opacity-100"
                  />
                </div>
              </label>
              <p className="w-full flex-1">{todo.text}</p>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className=""
              >
                <img src={crossIcon} alt="delete icon" className="w-5 h-4" />
              </button>
            </li>
          ))}
          <li className="flex w-full p-3 justify-between  bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
            <p className="text-[0.9rem]">{} items left</p>
            <CustomButton type="button" classname="text-[0.9rem]">
              Clear Completed
            </CustomButton>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
