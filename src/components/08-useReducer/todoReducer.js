export const todoReducer = (state = [], action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }
  if (action?.type === "delete") {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action?.type === "toggleDone") {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });
  }
  return state;
};
