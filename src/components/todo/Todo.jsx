import React from "react";
import "./style.css";

export default function Todo({ todo, onRemove, onIsDone }) {
  const { title, body, isDone } = todo;

  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="buttonSet">
        <button className="deleteBtn" onClick={() => onRemove(todo.id)}>
          삭제하기
        </button>

        {isDone ? (
          <button className="commonBtn" onClick={() => onIsDone(todo.id)}>
            취소
          </button>
        ) : (
          <button className="commonBtn" onClick={() => onIsDone(todo.id)}>
            완료
          </button>
        )}
      </div>
    </div>
  );
}
