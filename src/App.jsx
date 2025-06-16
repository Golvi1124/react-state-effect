// useState is one of React hooks and most commonly used.
import { useState } from "react";

export default function App() {
  const initialCars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Civic", year: 2019 },
    { make: "Ford", model: "Mustang", year: 2021 },
  ];

  const [cars, setCars] = useState(initialCars);

  return (
    <div>
      {cars.map((car, i) =>{
        return (
          <div key={i}>
            <h3>{car.make}</h3>
            <p>{car.model}</p>
            <p>{car.year}</p>
          </div>
        );
      })}
    </div>
  );
}









/*

export default function App() {
  const [count, setCount] = useState(0); 

  // function that updates
function handleIncrement() { // Left to see other ways to update state. previour value is passed as an argument to the updater function.
    setCount(prev => prev + 1);
  }

  return( 
    <div>
<h1>{count}</h1>
<button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false); 
  const toggleVisibility = () => setIsVisible(!isVisible);

  return( 
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"} 
      </button>

     ...Conditional rendering: if isVisible is true, show the paragraph 
      {isVisible && <p>These are the details!!!</p>} 

    </div>
  )
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false); 

  return( 
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <p>This is the content to show or hide.</p>}
    </div>
  )
}

------------------------------------------
export default function App() {

  // useState is a hook that allows you to add state to functional components.
  // It returns an array with two elements: the current state value and a function to update it.
  // The initial state is passed as an argument to useState.
  const [count, setCount] = useState(0); 

  function handleIncrement() { // Left to see other ways to update state
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
} */