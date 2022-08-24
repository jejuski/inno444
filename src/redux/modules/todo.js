
const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";
const DELETE = "todo/DELETE";

const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ],
};


export function createTodo(todo) {
  return { type: CREATE, todo: todo };
} 

export function toggleStatusTodo(todo) {
  return { type: UPDATE, todo };
}

export function deleteTodo(todo) {
  return { type: DELETE, todo };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      const newTodo = [...state.todos, action.todo];
      return {
        ...state,
        todos: newTodo,
      };
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.todo ? { ...todo, isDone: !todo.isDone } : todo)),
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todo),
      };
    default:
      return state;
  }
}
