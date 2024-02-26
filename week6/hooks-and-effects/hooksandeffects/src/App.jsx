import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function counterINC() {
    setCount(count + 1);
  }

  function RefreshC() {
    setCount(0);
  }

  return (
    <>
      <button onClick={counterINC}>Counter {count}</button>
      <button onClick={RefreshC}>Refresh Counter</button> <br />
      <br />
      <Component1 />
    </>
  );
}

function Component1() {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(event) => {
          let sum = 0;
          const num = parseInt(event.target.value, 10);
          for (let i = 1; i <= num; i++) {
            sum += i;
          }

          setValue(sum);
        }}
      ></input>
      <br />
      Sum: {value}
      <br />
    </>
  );
}

export default App;
