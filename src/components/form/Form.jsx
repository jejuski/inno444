import axios from "axios";
import React, {useState} from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Form() {
  
  const [inputs, setInputs] = useState({
    nick: "",
    title: "",
    body: "",
  });

 
  /*create users*/
  const createUsers = () => {
    return axios.post("http://localhost:3002/todo", {
      title: inputs.title,
      nick: inputs.nick,
      body: inputs.body,
      
    }
    );
  };
  const handleOnSubmit = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate();
    function handleClick() {
        navigate("/Detail");
    }
  return (
    <>
      <div
        onChange={handleOnSubmit}
        className="ml-4 flex flex-col w-2/12 form_container"
      >
        <label className="form-label">닉네임</label>
        <input className="form-control form-control-lg" type="text" name="nick" />
        <label className="form-label">아이디</label>
        <input className="form-control form-control-lg" type="text" name="title" />
        <label className="form-label">내용</label>
        <input className="form-control form-control-lg" type="text" name="body" />     
        <button className="inputButton mb-2" onClick={ () => {
          createUsers()
          handleClick()
        } }>
          저장
        </button>
              </div>
    </>
  );
}
export default Form;
