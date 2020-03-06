import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const generateRandomID = () => {
  return Math.floor(Math.random() * 100000000);
};

export const AddToDo = () => {
  const [text, setText] = useState("");
  const { addToDo } = useContext(GlobalContext);
  const submit = e => {
    e.preventDefault();
    const newToDo = {
      text,
      done: false
    };
    addToDo(newToDo);
    setText("");
  };
  return (
    <div>
      <h3 className="section-title">Add To Do</h3>
      <form
        className="input-group"
        method="POST"
        action="/api/greeting"
        onSubmit={submit}
      >
        <input
          type="text"
          name="newToDo"
          id="newToDo"
          placeholder="Enter new todo..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" id="addtodo" value="Add Todo" />
      </form>
    </div>
  );
};
