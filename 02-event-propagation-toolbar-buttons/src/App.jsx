import { useState } from 'react'

import './App.css'

function App() {
  
  return (
    <div className='toolbar' onClick={()=>
      alert("I am Toolbar...")
    }>

      <button onClick={()=>alert('Playing...')}>Click for Play</button>
      <button onClick={()=>alert('Singing...')}>Click for Singing</button>
    </div>
  )
}

export default App
