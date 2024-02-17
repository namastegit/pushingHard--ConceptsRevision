import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import  Todos  from './components/todos'


 function App() {
  const [todos, setTodos] =useState([]);
 fetch("http://localhost:3000/alltodos")
.then(async (res) => {
const json = await res.json();
console.log(json);
setTodos(json.alltodos);
})
  
return (
    <>
    <div>
<CreateTodo/>
      <Todos  todos={todos}></Todos>
    </div>
    </>
  )
}

export default App
