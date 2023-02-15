import React, { useState, useRef } from "react";

import { patch, del } from "../../utils/api";
import ApiUrl from "../../constants/ApiUrl";

const SingleTodo = ({ todo, filterDeletedTodo, updateRevisedTodo }) => {
  const checkbox = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [todoInput, setTodoInput] = useState(todo.todo);
  const handleTodoInput = (event) => {
    setTodoInput(event.target.value);
  };
  const onClickDelete = async (id) => {
    try {
      await del(ApiUrl.TODO, id);
      filterDeletedTodo();
    } catch (err) {
      alert(err.message);
    }
  };
  const updateCheckbox = async () => {
    try {
      await patch(ApiUrl.TODO, todo.id, {
        todo: todo.todo,
        isCompleted: checkbox.current.checked,
      });
    } catch (err) {
      alert(err.message);
    }
  };
  const reviseTodo = async () => {
    try {
      const newTodo = await patch(ApiUrl.TODO, todo.id, {
        todo: todoInput,
        isCompleted: checkbox.current.checked,
      });
      updateRevisedTodo(todo.id, newTodo);
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };
  const onClickCancel = () => {
    setTodoInput(todo.todo);
    setIsEditing(false);
  };

  return (
    <li className="text-[1vh] list-none my-1">
      <label className="inline-block whitespace-nowrap">
        <input
          type="checkbox"
          ref={checkbox}
          onChange={updateCheckbox}
          defaultChecked={todo.isCompleted}
          className="align-middle mr-1 w-[20px] h-[20px]"
        />
        {isEditing ? (
          <input
            value={todoInput}
            onChange={handleTodoInput}
            className="bg-slate-100 m-2 p-2 rounded-lg"
            data-testid="modify-input"
          />
        ) : (
          <span className="text-[1.3vh] m-3 align-middle">{todo.todo}</span>
        )}
      </label>
      {isEditing ? (
        <>
          <button
            onClick={reviseTodo}
            className="bg-blue-200 m-2 p-2 rounded-lg"
            data-testid="submit-button"
          >
            제출
          </button>
          <button
            onClick={onClickCancel}
            className="bg-gray-200 m-2 p-2 rounded-lg"
            data-testid="cancel-button"
          >
            취소
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setIsEditing(true);
            }}
            className="bg-lime-200 mx-1 p-2 rounded-lg"
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            onClick={() => {
              onClickDelete(todo.id);
            }}
            className="bg-rose-200 mx-1 p-2 rounded-lg"
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
