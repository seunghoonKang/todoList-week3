import React, { useState, useRef } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "abc",
      body: "def",
      isDone: false,
    },
    {
      id: 1,
      title: "hi",
      body: "ggg",
      isDone: true,
    },
  ]);

  const nextId = useRef(2);

  //onCreate를 Form에서 쓰지 않는 건, setTodos가 여기 정의되어 있기도 하고, 사실 setTodo만 props로 넘겨줘도 되지만 그렇게되면 어떻게 구성되어있는지 계속 Form 탭과 왔다갔다 해야하는 불편함, 그리고 onCreate라는 함수로 필요한 내용을 정리하여 주고받는 것이 훨씬 효율적이기에 그렇게 한다고 함.
  //payload는 아무 이름이나 상관없지만, 어떤 값을 저렇게 받아올때 보통 payload를 쓴다고 함.
  const onCreate = (payload) => {
    setTodos([
      ...todos,
      {
        id: (nextId.current += 1),
        title: payload.title,
        body: payload.body,
        isDone: false,
      },
    ]);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onIsDone = (id) => {
    let findIndex = todos.findIndex((todo) => todo.id === id);
    let copiedItems = [...todos];
    copiedItems[findIndex].isDone = !copiedItems[findIndex].isDone;
    setTodos(copiedItems);
  };

  return (
    <Layout>
      <Header />
      <Form onCreate={onCreate} />
      <List todos={todos} onRemove={onRemove} onIsDone={onIsDone} />
    </Layout>
  );
}
