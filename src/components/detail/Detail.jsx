import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const todo = useSelector((state) => state.todo.todos);
  const params = useParams();
  const navigate = useNavigate();

  const titles = todo.map((a) => a.title);
  const bodys = todo.map((a) => a.body);

  const id = params.id;
  const title = titles[id - 1];
  const body = bodys[id - 1];

  return (
    <div className="layout2">
      <div className="head">나의 할일</div>
      <div className="detailForm">
        <button
          className="backBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </button>
        <div className="container">
          <div className="id">ID :{id}</div>
          <div className="title">{title}</div>
          <div className="body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
