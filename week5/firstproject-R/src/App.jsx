// import { useState } from 'react'

// import './App.css'

// function App() {  
//   const [count, setCount] = useState(0) //<-- zerto is - state variable 
//   function incCounter() { 
//     setCount(count + 1);
//    }
//   return (
//  <div>
// <button onClick={incCounter}>
//           count is {count}
//         </button>
//  </div>
  
//   )
// }

// export default App
// __________________________________________________________________________

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
 
//   return (
//     <div>
//       <Button1 count={count} setCount={setCount} />
//           {/* compnent 1 */}
//       <Button1 count={count + 2} setCount={setCount}></Button1> 
//       {/* compnent 2 */}
//       <Button1 count={count * 100} setCount={setCount}></Button1>
//           {/* compnent 3 */}
//       <Button1 count={count / 100} setCount={setCount}></Button1>
//           {/* compnent 4 */}



//     </div>
//   );
// }
// //props parametres
// function Button1(props) {
//   function incCounter() { 
//     props.setCount(props.count + 1);
//   }

//   return (
//     <button onClick={incCounter}>
//       Counter {props.count}
//     </button>
//   );
// }

// export default App;

// ___________________________________________________________________________________
// TODOS
import React, { useState } from 'react';
import './App.css';
let count = 0;
function App() {
 
  const [todos, setTodos] = useState([ //state variables
    {
      title: "aa",
      description: "bb"
    },
    {
      title: "cc",
      description: "dd"
    }
  ]);
function addTODOS(){
  count++;
  setTodos([...todos, {
    title:"new",
    description:`todo ${count}`
  }])
}
  return (<>

  <div> 
    <button onClick={addTODOS}>ADD</button>
  </div>
    <div>
      {todos.map((todo, index) => ( // rendering
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
    </>
  );
}

function Todo(props) { // component
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  );
}

export default App;

