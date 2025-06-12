// useState is one of React hooks and most commonly used.
import { useState } from "react";

export default function App() {

  // useState is a hook that allows you to add state to functional components.
  // It returns an array with two elements: the current state value and a function to update it.
  // The initial state is passed as an argument to useState.
  const [count, setCount] = useState(0); 

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

    </div>
  );
}