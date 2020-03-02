export default (state, action) => {
  let newToDoList;
  switch (action.type) {
    case "ADD_TODO":
      newToDoList = [...state.toDoList, action.payload];
      localStorage.setItem("toDoList", JSON.stringify(newToDoList));
      return {
        ...state,
        toDoList: [...newToDoList]
      };
    case "TOGGLE_DONE":
      newToDoList = state.toDoList.map(todo => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
          return todo;
        } else {
          return todo;
        }
      });
      localStorage.setItem("toDoList", JSON.stringify(newToDoList));
      return {
        ...state,
        toDoList: [...newToDoList]
      };
    case "DELETE_TODO":
      newToDoList = state.toDoList.filter(todo => todo.id !== action.payload);
      localStorage.setItem("toDoList", JSON.stringify(newToDoList));
      return {
        ...state,
        toDoList: [...newToDoList]
      };
    default:
      return state;
  }
};
