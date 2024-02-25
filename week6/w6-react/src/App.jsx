
    import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const fetching = () => {
    fetch("http://localhost:3000/alltodos")
      .then(res => res.json())
      .then(data => {
        setTodos(data.alltodos); 
      });
  };

  const addTodo = () => {
    const newTodo = {
      index: Math.random(), // Ensure this index is unique
      title: `${Math.random()}`,
      description:  `${Math.random()}`,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <button onClick={fetching}>FETCH ALL TODOS</button>
      <button onClick={addTodo}>ADD TODO</button>
      {todos.map((todo, index) => (
        <TODOc1 key={index} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function TODOc1({ title, description }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </>
  );
}

export default App;
// commiting

// _________________________________________________________________________________________________________________________
// import { memo, useState } from 'react'
// import './App.css'

// function App() {
//   const [title, setTitle] = useState("hello2");
//   function addRandom() {
// setTitle(Math.random);
//   }

//   return (
//     <>
//     <div> <br></br> <br></br>
//       <button onClick={addRandom}>Add Random Number</button><br></br><br></br>
//       <Headers title = {title}></Headers><br></br>
//       <Headers title = "hello"></Headers><br></br>
//     </div>
//     </>
//   )
// }
// const Headers = memo(({title}) => {
//   return(
//     <>
//     <div>
//       {title}
//     </div>
//     </>
//   )
// })

// export default App
