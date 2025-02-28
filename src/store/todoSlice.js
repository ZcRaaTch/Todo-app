import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Add Todo", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log("Before:", state.todos);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("After:", state.todos);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    reorderTodos: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      if (oldIndex !== -1 && newIndex !== -1) {
        const [movedItem] = state.todos.splice(oldIndex, 1);
        state.todos.splice(newIndex, 0, movedItem);
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleComplete,
  removeCompleted,
  reorderTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
