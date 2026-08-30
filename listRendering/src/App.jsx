import React from 'react';
import './App.css';
import { people } from './data.jsx'; // ✅ Correct named import

function App() {
  const list = people.map(person => (
    <li key={person.id}>
      <p><strong>{person.name}</strong></p>
      <p>{person.profession}</p>
      <p>{person.accomplishment}</p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{list}</ul>
    </article>
  );
}

export default App;
