import { useState } from "react";
import ThemeButton from "./components/componentExport.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] sm:bg-[url('/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/images/bg-desktop-dark.jpg')] w-full h-52 bg-[length:100%_100%] bg-no-repeat"></div>
      <div className="z-10 -translate-y-48 w-full">
        <div className=" mx-auto my-8 flex justify-between w-[85%]">
          <h1 className="font-medium tracking-[0.5rem] text-[var(--color-light-primary)] text-3xl">
            TODO
          </h1>
          <ThemeButton />
        </div>
      </div>
    </>
  );
}

export default App;
