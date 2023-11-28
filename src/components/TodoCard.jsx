import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone, updateTodo } from "../redux/appThunk";
import { useState } from "react";

const TodoCard = ({ index, id, title, isDone }) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    if (!newTodo || newTodo === title) return;

    dispatch(updateTodo({ todoId: id, title: newTodo }));

    setNewTodo(newTodo);
    setUpdateToggle(false);
  };

  const onClickDelete = () => {
    dispatch(deleteTodo({ todoId : id }));
  };

  return (
    <li
      className={`w-96 py-2 text-2xl flex ${
        index % 2 ? "bg-white" : "bg-gray-200"
      }`}
    >
      <span className="w-1/12 inline-block">{id}</span>
      {updateToggle ? (
        <form className="w-7/12 flex" onSubmit={onSubmitUpdateTodo}>
          <input
            className="w-3/4"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="w-1/4 ml-2" type="submit">
            <FiEdit3 />
          </button>
        </form>
      ) : (
        <button
          className={`w-7/12 ${isDone && "line-through"}`}
          onClick={onClickIsDone}
        >
          {title}
        </button>
      )}
      <button
        className="w-2/12 hover:text-gray-500"
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? (
          "취소"
        ) : (
          <div className="px-5">
            <FiEdit3 />
          </div>
        )}
      </button>
      <button
        className="w-2/12 px-5 hover:text-gray-500"
        onClick={onClickDelete}
      >
        <FiTrash2 />
      </button>
    </li>
  );
};

export default TodoCard;
