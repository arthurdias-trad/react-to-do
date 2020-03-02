export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload]
      };
    case "TOGGLE_DONE":
      return {
        ...state,
        toDoList: state.toDoList.map(todo => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
            return todo;
          } else {
            return todo;
          }
        })
      };
    case "DELETE_TODO":
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
