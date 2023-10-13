import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="App">
      <button data-testid="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <span data-testid="count">{count}</span>
      <span data-testid="message">
        {count && count % 3 === 0 ? "Fizz" : ""}
        {count && count % 5 === 0 ? "Buzz" : ""}
        {count && count % 7 === 0 ? "Bang" : ""}
      </span>
    </div>
  );
}

export default App;
