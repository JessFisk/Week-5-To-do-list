import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const taskComplete = (id) => {
    let updatedTodos = [...list].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setList(updatedTodos);
  }

  return (
    <div id="toDolist">
      <div id="titleBox">
        <h1 id="title">To Do List</h1>
      </div>
      <div id="inputAddBoxContainer">
        <input id="inputBox" type="text" value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyUp={(e) => {
            if (e.key === "Enter") { addTodo(input) }
          }
          }
        />
        <button id="addBtn" onClick={() => addTodo(input)}>Add</button>
      </div>
      <ul id="listBody">
        {list.map((todo) => (
          <li key={todo.id} className={todo.completed ? "fadeStrikethrough listItem" : "listItem"}>
            <p>{todo.todo}</p>
            <div className="tickCrossBtns">
              <input className="completed" type="checkbox" checked={todo.completed} onChange={() => taskComplete(todo.id)} />
              <button className="Delbtn" onClick={() => deleteTodo(todo.id)}>&times;</button>
            </div>
          </li>
        ))}
      </ul>
      {/* w3schools HTML4EntityNames &Oslash;  &times; these creates x (and others) button that can be seen on websites*/}
    </div>
  );
}

export default App;
