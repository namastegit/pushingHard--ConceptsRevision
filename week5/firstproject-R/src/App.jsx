import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <Button1 count={count} setCount={setCount} />
          {/* compnent 1 */}
      <Button1 count={count + 2} setCount={setCount}></Button1> 
      {/* compnent 2 */}
      <Button1 count={count * 100} setCount={setCount}></Button1>
          {/* compnent 3 */}
      <Button1 count={count / 100} setCount={setCount}></Button1>
          {/* compnent 4 */}



    </div>
  );
}
//props parametres
function Button1(props) {
  function incCounter() { 
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={incCounter}>
      Counter {props.count}
    </button>
  );
}

export default App;
