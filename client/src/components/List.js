import React, { useContext, useEffect } from "react";
import { ToDo } from "./ToDo";
import { GlobalContext } from "../context/GlobalState";

export const List = () => {
  const { toDoList, getToDos } = useContext(GlobalContext);

  useEffect(() => {
    getToDos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3 className="section-title">List</h3>
      <ul className="list">
        {toDoList.map(todo => (
          <ToDo key={todo._id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
