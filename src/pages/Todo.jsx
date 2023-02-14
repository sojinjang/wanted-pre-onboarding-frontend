import React, { useState, useEffect } from "react";

import { get } from "../utils/api";
import ApiUrl from "../constants/ApiUrl";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const getTodoData = () => {
    try {
      const todoArr = get(ApiUrl.TODO);
      setTodos(todoArr);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input checked={todo.isCompleted} type="checkbox" />
                <span>{todo.todo}</span>
              </label>
            </li>
          );
        })}
    </div>
  );
};

export default Todo;
