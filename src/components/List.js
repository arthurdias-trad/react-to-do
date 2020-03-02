import React, { useContext } from "react";
import { ToDo } from "./ToDo";
import { GlobalContext } from "../context/GlobalState";

export const List = () => {
  const { toDoList } = useContext(GlobalContext);

  return (
    <>
      <h3 className="section-title">List</h3>
      <ul className="list">
        {toDoList.map(todo => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
