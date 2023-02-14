import React, { useState, useEffect } from "react";

import { get, post } from "../utils/api";
import ApiUrl from "../constants/ApiUrl";
import SingleTodo from "../components/todo/SingleTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const handleTodoInput = (event) => {
    setTodoInput(event.target.value);
  };
  const getTodoData = async () => {
    try {
      const todoArr = await get(ApiUrl.TODO);
      setTodos(todoArr);
    } catch (err) {
      alert(err.message);
    }
  };
  const postTodoData = async () => {
    try {
      const newTodo = await post(ApiUrl.TODO, { todo: todoInput });
      setTodos((prev) => {
        return [...prev, newTodo];
      });
      setTodoInput("");
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex">
        <input
          value={todoInput}
          onChange={handleTodoInput}
          className="bg-slate-100 m-2 p-2 rounded-lg"
          data-testid="new-todo-input"
        />
        <button
          onClick={postTodoData}
          className="text-[1.5vh] bg-blue-200 m-2 p-2 rounded-lg"
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </div>
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default Todo;
