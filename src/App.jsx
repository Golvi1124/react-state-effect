// useEffect allows you to perform side effects in function components.
// It is a hook that lets you synchronize a component with an external system.
// Common use cases include data fetching, subscriptions, or manually changing the DOM.
// The useEffect hook runs after the render is committed to the screen.
// It can also return a cleanup function to clean up resources when the component unmounts or before the effect runs again.
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";

// Fetch data from an API. Best to use third party libraries like tanstack query (react query)

export default function App() {
  // -------------  robust "old way" of fetching data --------------------------
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  // must use only [] to run only once after mounting
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      setError(null); // Reset error state before fetching
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }

        // Parse the JSON response, If the response is not ok, throw an error
        const result = await response.json();
        setData(result); // Set the fetched data to state
      } catch (error) {
        setError(error.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div>
      <h1>Data Fetching Example</h1>

      {/*(in video from 44th minute) if loading, show loading message */}
      {loading && <p>Loading...</p>}

      {/* if error, show error message */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* if data is fetched, display it */}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

/*
............Eventlistener.
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
