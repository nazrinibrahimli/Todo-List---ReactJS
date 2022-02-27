import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import ToDoItem from "./ToDoItem";
function App() {
  const [inputValue, setInputValue] = useState(" ");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  function addToArray() {
    addItems((previousItems) => {
      return [...previousItems, inputValue];
    });
    setInputValue("");
  }

  function deleteItem(id) {
    addItems((prev) => {return prev.filter((item,index)=> { return index!==id; });
     
  });
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputValue} />
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item,index) => (
            <TodoItem 
            onChecked={deleteItem}
            key={index}
            id={index}
            text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
