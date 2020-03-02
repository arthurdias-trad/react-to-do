import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

// Initial State

const toDoList = JSON.parse(localStorage.getItem("toDoList"));

const initialState = {
  toDoList: toDoList || []
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
