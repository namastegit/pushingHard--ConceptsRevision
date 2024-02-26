///6.2--  1:09:20 - another approach if dont want to use memoization -- by using useeffect[array] -- put expensive operation inside useEffect and [use this ] -- this is how we can control the rerendering of expensive operation. {harkirat only uses this approach only -- to see syntax got to video or camera pictures - date - 02/26/2024-- 6:15 PM}-- but for this approach we need to use one extra state variable(drawback)

//2nd -- we can use useMemo also in place of memo and can take use of []-- usememo(()={},[])
import React, { useState, memo} from "react";

function App() {
function ButtON() {
  
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
  </>
)
}

const Component1 = memo(() => {
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
});

  return (
    <>
      <ButtON/>
      <Component1 />
    </>
  );
}


export default App;
