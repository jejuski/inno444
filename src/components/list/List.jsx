import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todo";

function List() {
  const todosList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const onEditHandler = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  const onDeleteHanlder = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="list-container">
      <h2 className="list-title pb-4">오늘 할일</h2>
      <div className="list-wrapper ">
        {todosList.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title pb-4">완료</h2>
      <div className="list-wrapper ">
        {todosList.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
