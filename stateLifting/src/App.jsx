import { useState } from 'react';
import Card from './components/Card'; // Assuming the path is correct
import './App.css'
function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName} />
      <p>I am Inside Parent Component and value is: {name}</p>
    </div>
  );
}

export default App;
