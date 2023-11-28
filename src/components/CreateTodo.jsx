import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));

    dispatch(setNewTodo(""));
  };

  return (
    <form className="flex" onSubmit={onSubmitCreateTodo}>
      <input
        className="px-4 py-2 text-2xl focus:outline-none border-2 focus:border-pink-400"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-4 px-4 py-3 bg-pink-400 hover:bg-pink-500 active:bg-pink-400 rounded-lg"
        type="submit"
        value="생성"
      />
    </form>
  );
};

export default CreateTodo;
