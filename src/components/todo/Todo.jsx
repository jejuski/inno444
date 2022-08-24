import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Todo({ todo, onEditHandler, onDeleteHanlder }) {
  return (
    <Card>
      <div className="card-all">
        <div className="card-body">
          <button className="btn-close" onClick={() => onDeleteHanlder(todo.id)} style={{ marginLeft: "14em" }}></button>
          <Link to={`/${todo.id}`} key={todo.id} style={{ color: "black", textDecoration: "none" }}>
            <h2 className="card-title">{todo.title}</h2>
            <div className="card-text">{todo.body}</div>
          </Link>
        </div>
        <div className="pb-3" onClick={() => onEditHandler(todo.id)}>
          <button className={todo.isDone ? "not" : "done"}>{todo.isDone ? "아직" : "완료"}</button>
        </div>
      </div>
      
    </Card>
  );
}

export default Todo;
