import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
  },
});

export default store;
