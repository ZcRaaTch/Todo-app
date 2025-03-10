import React from "react";
import { useSelector, useDispatch } from "react-redux";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";
import {
  removeTodo,
  toggleComplete,
  removeCompleted,
} from "../store/todoSlice";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TodoItem({ todo }) {
  const todos = useSelector((state) => state.todos.todos);
  const filters = useSelector((state) => state.todos.filters);
  const dispatch = useDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={todo.id}
      className="m-0 flex w-full min-h-[50px] lg:min-h-16 p-3 px-4 bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]"
    >
      <div className="flex gap-4 w-full">
        <label
          onPointerDown={(e) => e.stopPropagation()}
          className="cursor-pointer flex items-center"
        >
          <input
            type="checkbox"
            className="hidden peer"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
            onPointerDown={(e) => e.stopPropagation()}
          />
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
          className={`w-full flex-1 self-center lg:text-[1.2rem] ${
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
          onPointerDown={(e) => e.stopPropagation()}
        >
          <img src={crossIcon} alt="delete icon" className="w-5 h-4" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
