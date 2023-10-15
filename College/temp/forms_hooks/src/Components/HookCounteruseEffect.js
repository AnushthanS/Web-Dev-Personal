import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function HookCounteruseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 100000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

export default HookCounteruseEffect
