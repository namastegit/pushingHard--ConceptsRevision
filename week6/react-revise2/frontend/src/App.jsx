import { useState } from "react";
import { Showthistodo } from "./components/showthistodo";

function App() {
  const [title, setTitle] = useState(4);

  return (
    <>
      <button onClick={() => { setTitle(1); console.log('Button 1 clicked'); }}>1</button>
      <button onClick={() => { setTitle(2); console.log('Button 2 clicked'); }}>2</button>
      <button onClick={() => { setTitle(3); console.log('Button 3 clicked'); }}>3</button>
      <button onClick={() => { setTitle(4); console.log('Button 4 clicked'); }}>4</button>

      <Showthistodo title={title}></Showthistodo>
    </>
  );
}

export default App;
