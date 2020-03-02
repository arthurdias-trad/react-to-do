import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

// Initial State
const dummyToDos = [
  { id: 1, text: "Buy Groceries", done: true },
  { id: 2, text: "Take out trash", done: false },
  { id: 3, text: "Invoicing", done: false },
  { id: 4, text: "Studying", done: false }
];
const initialState = {
  toDoList: dummyToDos
};

// Create context
export const GlobalContext = createContext(initialState);

// Create global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const addToDo = todo => {
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });
  };
  const toggleDone = id => {
    dispatch({
      type: "TOGGLE_DONE",
      payload: id
    });
  };
  const deleteToDo = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });
  };

  return (
    <GlobalContext.Provider
      value={{ toDoList: state.toDoList, addToDo, toggleDone, deleteToDo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
