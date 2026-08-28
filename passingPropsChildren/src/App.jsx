import { useState } from 'react'


function App() {
 
  const [count, setCount] = useState(0);

  function handleClick()
  {
    setCount(count+1);
  }

  return (

      <div>
        <h2>Count : {count}</h2>
        <button onClick={handleClick}>Click Me...</button>
      </div>

  )
}

export default App
