import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <Button1 count={count} setCount={setCount} />
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
