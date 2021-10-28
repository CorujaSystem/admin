import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <button onClick={handleClick}>Click Me</button>

      <p>You clicked {count} times!</p>
    </div>
  );
}

export default App;
