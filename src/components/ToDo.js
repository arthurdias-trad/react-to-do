import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ToDo = ({ todo }) => {
  const { toggleDone, deleteToDo } = useContext(GlobalContext);
  let classname = todo.done ? "done" : "not-done";
  const toggle = e => {
    toggleDone(parseInt(e.target.dataset.id));
  };
  const remove = e => {
    deleteToDo(parseInt(e.target.dataset.id));
  };
  return (
    <li className={classname}>
      {todo.text}
      <span className="btn-wrapper">
        <button className="btn" data-id={todo.id} onClick={toggle}>
          Done
        </button>
        <button className={classname} data-id={todo.id} onClick={remove}>
          Delete
        </button>
      </span>
    </li>
  );
};
