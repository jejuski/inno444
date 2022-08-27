import { createStore, combineReducers } from "redux";
import todo from "./modules/todo.js";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;

