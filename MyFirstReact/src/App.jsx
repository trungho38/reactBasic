import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyCounter from "./components/MyCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyCounter />
      <MyCounter />
      <MyCounter></MyCounter>
    </>
  );
}

export default App;
