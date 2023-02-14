import React, { useState, useEffect } from "react";

import { patch, del } from "../../utils/api";
import ApiUrl from "../../constants/ApiUrl";

const SingleTodo = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
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

  return (
    <li className="text-[1vh] list-none">
      <label className="inline-block whitespace-nowrap">
        <input
          id={todo.id}
          type="checkbox"
          onChange={(e) => {
            onChangeCheckbox(e.target.id, e.target.checked, todo.todo);
          }}
          defaultChecked={todo.isCompleted}
          className="align-middle mr-1 w-[20px] h-[20px]"
        />
        {isEditing ? (
          <input
            value={todo.todo}
            className="bg-slate-100 m-2 p-2 rounded-lg"
            data-testid="modify-input"
          />
        ) : (
          <span className="text-[1.3vh] m-3 align-middle">{todo.todo}</span>
        )}
      </label>
      {isEditing ? (
        <>
          <button className="bg-blue-200 m-2 p-2 rounded-lg" data-testid="submit-button">
            제출
          </button>
          <button className="bg-gray-200 m-2 p-2 rounded-lg" data-testid="cancel-button">
            취소
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
            className="bg-green-200 m-2 p-2 rounded-lg"
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            onClick={() => {
              onClickDelete(todo.id);
            }}
            className="bg-red-200 m-2 p-2 rounded-lg"
            data-testid="delete-button"
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default SingleTodo;
