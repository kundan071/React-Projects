import { useState } from 'react'

import './App.css'

function App() {
 
  function submit()
  {
    alert("Submitted....")
  }

  return (
    <>
        <input placeholder='Enter Name'></input>
        <button onClick={submit}>Submit</button>
    </>
  )
}

export default App
