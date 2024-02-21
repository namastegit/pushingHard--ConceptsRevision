import { memo, useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("hello2");
  function addRandom() {
setTitle(Math.random);
  }

  return (
    <>
    <div> <br></br> <br></br>
      <button onClick={addRandom}>Add Random Number</button><br></br><br></br>
      <Headers title = {title}></Headers><br></br>
      <Headers title = "hello"></Headers><br></br>
    </div>
    </>
  )
}
const Headers = memo(({title}) => {
  return(
    <>
    <div>
      {title}
    </div>
    </>
  )
})

export default App
