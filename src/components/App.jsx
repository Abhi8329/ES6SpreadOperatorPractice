import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputValue];
    });
    setInputValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitems) => (
            <li>{todoitems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
