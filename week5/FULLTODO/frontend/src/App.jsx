import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'


async function App() {
  const [todos, setTodos] =useState([]);
  const Allofthem = await fetch("http://localhost:3000/alltodos");
  const finalAll = await Allofthem.json();
  setTodos(finalAll.todos);
return (
    <>
    <div>
<CreateTodo/>
      <Todos  todos={[{
        title : "TODO1",
        description : "GO to gym daily",
        completed : false
      }
      ]}></Todos>
    </div>
    </>
  )
}

export default App
