// useEffect allows you to perform side effects in function components.
// It is a hook that lets you synchronize a component with an external system.
// Common use cases include data fetching, subscriptions, or manually changing the DOM.
// The useEffect hook runs after the render is committed to the screen.
// It can also return a cleanup function to clean up resources when the component unmounts or before the effect runs again.
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
 window.addEventListener("resize", handleResize)

 // Cleanup function to remove the event listener when the component unmounts
  // or before the effect runs again.
  // This prevents memory leaks and ensures that the event listener is not added multiple times.
  return () => {
      window.removeEventListener("resize", handleResize);
  }
    }, []);


  return (
    <div>
      <h1>{width}</h1>
    </div> 
  );
}

/*
WITHOUT DEPENDENCY ARRAY 
  useEffect(() => {
    // code here })
}) -> runs after every render


WITH EMPTY DEPENDENCY ARRAY   ( [] = dependency array)
    useEffect(() => {
    // code here 
    }, []) -> runs ONLY once after the initial render
    Making sure that it runs only once is useful for fetching data or setting up subscriptions that should only happen once when the component mounts.
    And doesn't run again and again on every render.
    Best on fetching data from API because gets data only once

WITH DEPENDENCY ARRAY
    useEffect(() => {
    // code here
    }, [dependency1, dependency2]) -> runs after the initial render and whenever any of the dependencies change



*/