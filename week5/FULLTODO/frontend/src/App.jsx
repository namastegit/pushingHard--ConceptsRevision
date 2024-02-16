import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'


 function App() {
  const [todos, setTodos] =useState([]);
 fetch("http://localhost:3000/alltodos")
.then(async (res) => {
const json = await res.json();
setTodos(json.todos);
})
  
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
