import { useState } from 'react'; // Import useState from React - it allows to manage state in functional components

export function Counter() {
    const [counter, setCounter] = useState(0); // Initialize a state variable 'counter' with an initial value of 0 and a function 'setCounter' to update it
    
    function increment() {
        setCounter(counter + 1); // Update the state by incrementing the current counter value
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}