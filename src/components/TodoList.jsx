import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";
import crossIcon from "../assets/icon-cross.svg";
import checkIcon from "../assets/icon-check.svg";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <img src={crossIcon} alt="delete icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
