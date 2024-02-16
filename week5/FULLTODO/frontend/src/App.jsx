import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'

function App() {
return (
    <>
    <div>
<CreateTodo/>
    </div>
    <div>
      <Todos todos={[{
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
