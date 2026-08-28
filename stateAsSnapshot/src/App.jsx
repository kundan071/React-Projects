import { useState } from "react";
import "./App.css";

function App() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <br />
        <br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;