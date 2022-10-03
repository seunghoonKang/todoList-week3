import React, { useState } from "react";
import "./style.css";

export default function Form({ onCreate }) {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const { title, body } = inputs;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputs.title.length < 1 || inputs.body.length < 1) {
      return;
    }
    console.log(inputs);
    onCreate(inputs);
    setInputs({
      title: "",
      body: "",
    });
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <form action="" onSubmit={onSubmitHandler} className="formLayout">
      <div className="inputGroup">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          className="formContent"
          onChange={onChangeHandler}
          value={title}
          name="title"
          id="title"
        ></input>

        <label htmlFor="content">내용</label>

        <input
          type="text"
          className="formContent"
          onChange={onChangeHandler}
          value={body}
          name="body"
          id="content"
        ></input>
      </div>
      <button type="submit" className="addButton">
        추가하기
      </button>
    </form>
  );
}
