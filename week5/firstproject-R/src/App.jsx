import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incCounter() { 
    setCount(count + 1);
   }
  return (
 <div>
<button onClick={incCounter}>
          count is {count}
        </button>
 </div>
        
      
  )
}

export default App
