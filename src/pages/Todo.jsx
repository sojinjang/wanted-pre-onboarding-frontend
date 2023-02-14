import React, { useState, useEffect } from "react";

import { get, post, patch, del } from "../utils/api";
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
  const onClickDelete = async (id) => {
    try {
      await del(ApiUrl.TODO, id);
      setTodos(todos.filter((todo) => todo.id !== id));
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
        return (
          <li className="text-[1vh] list-none" key={todo.id}>
            <label className="inline-block whitespace-nowrap">
              <input
                id={todo.id}
                type="checkbox"
                onChange={(e) => {
                  onChangeCheckbox(e.target.id, e.target.checked, todo.todo);
                }}
                defaultChecked={todo.isCompleted}
                className="align-middle w-[20px] h-[20px]"
              />
              {false ? (
                <input
                  value={todo.todo}
                  className="bg-slate-100 m-2 p-2 rounded-lg"
                  data-testid="modify-input"
                />
              ) : (
                <span className="ml-2 align-middle">{todo.todo}</span>
              )}
            </label>
            <button
              onClick={() => {}}
              className="bg-blue-200 m-2 p-2 rounded-lg"
              data-testid="modify-button"
            >
              수정
            </button>
            <button
              onClick={() => {
                onClickDelete(todo.id);
              }}
              className="bg-blue-200 m-2 p-2 rounded-lg"
              data-testid="delete-button"
            >
              삭제
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
