import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todo";
import memoReducer from "./memo";

export default configureStore({
  reducer: {
    toDo: toDoReducer,
    memo: memoReducer,
  },
});
