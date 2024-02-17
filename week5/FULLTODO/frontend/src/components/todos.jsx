import React from 'react';

function Todos({ todos }) {
  console.log("Received todos:", todos); // Log the received todos prop

  return (
    <div>
      {todos.map(todo => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
