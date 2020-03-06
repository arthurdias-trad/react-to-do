export default (state, action) => {
  let newToDoList;
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload]
      };
    case "TOGGLE_DONE":
      newToDoList = state.toDoList.map(todo => {
        if (todo._id === action.payload._id) {
          todo.done = !todo.done;
          return todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        toDoList: [...newToDoList]
      };
    case "DELETE_TODO":
      newToDoList = state.toDoList.filter(todo => todo._id !== action.payload);
      return {
        ...state,
        toDoList: [...newToDoList]
      };
    case "GET_TODOS":
      return { ...state, loading: false, toDoList: action.payload };
    default:
      return state;
  }
};
