import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#f4f4f4",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
