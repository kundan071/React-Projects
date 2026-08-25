import { useState } from "react";

import "./App.css";

function App() {
  function Button({ message, children }) {
    return (
  
        <button onClick={() => alert(message)}>
        {children}
        </button>
    
    );
  }

  return (
    <>
      <Button message="Playing.....">CLick me for Playing</Button>
      <br/>
      <Button message="Singing...!">CLick me for Singing</Button>
    </>
  );
}

export default App;
