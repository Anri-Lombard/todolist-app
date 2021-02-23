import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(inputItem) {
    setListItems((prevItems) => {
      return [...prevItems, inputItem];
    });
  }

  function deleteItem(id){
    setListItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {listItems.map((item, index) => (
            <TodoItem text={item} key={index} id={index} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;