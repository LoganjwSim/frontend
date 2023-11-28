import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");

  return response.data.todos;
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}/done`
    );

    return response.data.todo;
  }
);

export const updateTodo = createAsyncThunk(
  "appSlice/updateTodo",
  async ({ todoId, title }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);

export const deleteTodo = createAsyncThunk(
  "appSlice/deleteTodo",
  async ({ todoId }) => {
    await axios.delete(`http://localhost:3010/todos/${todoId}`);

    return todoId;
  }
);
