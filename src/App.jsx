import { useState } from "react";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] sm:bg-[url('/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/images/bg-desktop-dark.jpg')] w-full h-52 bg-[length:100%_100%] bg-no-repeat"></div>
      <div className="z-10 absolute mx-auto flex justify-between w-[80%]">
        <h1>TODO</h1>
        <ThemeButton />
      </div>
    </>
  );
}

export default App;
