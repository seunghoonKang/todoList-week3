import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

export default function List({ todos, onRemove, onIsDone }) {
  console.log(todos);
  const completedTodos = todos.filter((todo) => todo.isDone === true);
  const workingTodos = todos.filter((todo) => todo.isDone !== true);
  return (
    <>
      <RenderTodoList
        title="Working"
        todos={workingTodos}
        onRemove={onRemove}
        onIsDone={onIsDone}
      ></RenderTodoList>
      <RenderTodoList
        title="Complete"
        todos={completedTodos}
        onRemove={onRemove}
        onIsDone={onIsDone}
      ></RenderTodoList>
    </>
  );
}

const RenderTodoList = ({ title, todos, onRemove, onIsDone }) => {
  console.log(todos);
  return (
    <>
      <h2>{title}</h2>
      <div className="listingTodos">
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onIsDone={onIsDone}
            />
          );
        })}
      </div>
    </>
  );
};
