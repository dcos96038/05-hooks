const initialState = [
  {
    id: 1,
    todo: "Comprar hojas",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Estudiar",
  done: false,
};

const addTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(initialState, addTodoAction);

console.log(todos);
