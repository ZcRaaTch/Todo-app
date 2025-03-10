import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCompleted, setTodos } from "../store/todoSlice";
import { CustomButton, Filter, TodoItem } from "./componentExport";
// dnd kit imports
import {
  closestCorners,
  DndContext,
  useSensor,
  PointerSensor,
  useSensors,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const filters = useSelector((state) => state.todos.filters);

  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = todos.findIndex(
      (todo) => String(todo.id) === String(active.id)
    );
    const newIndex = todos.findIndex(
      (todo) => String(todo.id) === String(over.id)
    );

    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedTodos = arrayMove(todos, oldIndex, newIndex);
      dispatch(setTodos(updatedTodos));
    }
  };
  const filteredTodos = todos.filter((todo) => {
    if (filters === "Active") return !todo.completed;
    if (filters === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="w-[85%] lg:w-[45%] sm:w-[75%] md:w-[50%] rounded-lg overflow-hidden mx-auto -translate-y-[12.6rem] lg:-translate-y-[14.6rem] xl:-translate-y-[17.6rem]">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <ul
          className="list-none overflow-y-scroll overflow-x-hidden flex-col max-h-[350px] xl:max-h-[460px] lg:max-h-[420px] divide-y-[1px] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-[var(--color-dark-secondary-1)]
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <SortableContext
            items={todos.map((todo) => todo.id)}
            strategy={verticalListSortingStrategy}
          >
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </SortableContext>
        </ul>
      </DndContext>
      <div className="flex w-full p-3 justify-between items-center border-t-[1px] border-t-white bg-[var(--color-light-primary)] dark:bg-[var(--color-dark-secondary-1)]">
        <p className="text-[0.9rem] lg:text-[1rem]">
          {todos.filter((todo) => !todo.completed).length} items left
        </p>
        <Filter classname="hidden lg:flex lg:p-0" />
        <CustomButton
          type="button"
          classname="text-[0.9rem] lg:text-lg"
          onClick={() => dispatch(removeCompleted())}
        >
          Clear Completed
        </CustomButton>
      </div>
    </div>
  );
}

export default TodoList;
