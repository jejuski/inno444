import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todo";

let num = 1;
function Form() {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.body) return;
    dispatch(createTodo({ ...todo, id: num + 1 }));
    setTodo(initialState);
    num++;
  };

  return (
    <form className="inputForm" onSubmit={onSubmitHandler}>
      <div className="row gx-5 gy-3 mb-1">
        <div className="col">
          <label className="form-label">제목</label>
          <input className="form-control form-control-lg" onChange={onChangeHandler} type="text" name="title" value={todo.title} />
        </div>
        <div className="col">
          <label className="form-label">내용</label>
          <input className="form-control form-control-lg" onChange={onChangeHandler} type="text" name="body" value={todo.body} />
        </div>
      </div>

      <button className="inputButton mb-2">올리기</button>
    </form>
  );
}
export default Form;
