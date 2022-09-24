import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todo";

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
