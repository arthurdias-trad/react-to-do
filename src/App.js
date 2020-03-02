import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { List } from "./components/List";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <List />
        <AddToDo />
      </div>
    </GlobalProvider>
  );
}

export default App;
