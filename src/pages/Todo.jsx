import React, { useState, useEffect } from "react";

import { get, post, patch } from "../utils/api";
import ApiUrl from "../constants/ApiUrl";

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
  const onChangeCheckbox = async (id, isChecked, todo) => {
    try {
      await patch(ApiUrl.TODO, id, { isCompleted: isChecked, todo });
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex">
        <input
          value={todoInput}
          onChange={handleTodoInput}
          className="bg-slate-100 m-2 p-2 rounded-lg"
          data-testid="new-todo-input"
        />
        <button
          onClick={postTodoData}
          className="bg-blue-400 m-2 p-2 rounded-lg"
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <li className="text-[2vh]" key={todo.id}>
            <label className="inline-block whitespace-nowrap">
              <input
                id={todo.id}
                type="checkbox"
                onChange={(e) => {
                  onChangeCheckbox(e.target.id, e.target.checked, todo.todo);
                }}
                defaultChecked={todo.isCompleted}
                className="align-middle"
              />
              <span className="ml-2 align-middle">{todo.todo}</span>
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
