import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todo";
import memoReducer from "./memo";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
    memo: memoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
