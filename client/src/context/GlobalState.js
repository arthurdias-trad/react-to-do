import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";

// Initial State

const initialState = {
  toDoList: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Create global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const getToDos = async () => {
    try {
      const res = await axios.get("api/todos");
      dispatch({
        type: "GET_TODOS",
        payload: res.data.data
      });
    } catch (error) {}
  };

  const addToDo = async todo => {
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const res = await axios.post("/api/todos", todo, config);
      dispatch({
        type: "ADD_TODO",
        payload: res.data.todo
      });
    } catch (error) {}
  };
  const toggleDone = async id => {
    const res = await axios.put(`/api/todos/${id}`);
    dispatch({
      type: "TOGGLE_DONE",
      payload: res.data.todo
    });
  };
  const deleteToDo = async id => {
    try {
      await axios.delete(`/api/todos/${id}`);
      dispatch({
        type: "DELETE_TODO",
        payload: id
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        toDoList: state.toDoList,
        addToDo,
        toggleDone,
        deleteToDo,
        getToDos
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
