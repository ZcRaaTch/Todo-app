import { useState } from "react";
import {
  ThemeButton,
  TodoForm,
  TodoList,
  Filter,
} from "./components/componentExport.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] sm:bg-[url('/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/images/bg-desktop-dark.jpg')] w-full h-[13.7rem] bg-[length:100%_100%] bg-no-repeat"></div>
      <div className="z-10 -translate-y-[12.6rem] w-full">
        <div className=" mx-auto my-6 mb flex justify-between w-[85%]">
          <h1 className="font-medium tracking-[0.5rem] text-[var(--color-light-primary)] text-3xl">
            TODO
          </h1>
          <ThemeButton />
        </div>
        <TodoForm />
      </div>

      <TodoList />
      <Filter />
      <p className=" z-20 text-center text-[var(--color-light-secondary-3)] dark:text-[var(--color-dark-secondary-5)]">
        Drag and drop to reorder list
      </p>
    </>
  );
}

export default App;
