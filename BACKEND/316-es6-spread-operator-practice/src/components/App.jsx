
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // State to save the input text
  const [items, setItems] = useState([]); // State to save the array of items

  const handleChange = (e) => {
    setInputText(e.target.value); // Update the input text state
  };

  const handleAdd = () => {
    setItems([...items, inputText]); // Add the current input text to the array of items
    setInputText(""); // Clear the input text
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} /> {/* Bind the input value to the state and handle onChange event */}
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Render each item as a list item
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
