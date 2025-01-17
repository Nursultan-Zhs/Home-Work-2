import React, { useState } from "react";
import './App.css'


function App() {
  const [names, setNames] = useState(() => {
    
    const saved = localStorage.getItem("names");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");

  const addName = () => {
    if (name.trim()) {
      const updatedNames = [...names, name];
      setNames(updatedNames);
      localStorage.setItem("names", JSON.stringify(updatedNames)); 
    }
  };

  return (
    <div  className="div">
      <h2>Список имён</h2>
      <input className="inp"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button className="btn" onClick={addName}>Добавить</button>
      <ol>
        {names.map((n, index) => (
          <li  className="li" key={index}>{n}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;