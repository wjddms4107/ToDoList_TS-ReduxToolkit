import { createSlice } from "@reduxjs/toolkit";
import { toDoType } from "../routes/Home";

export interface MemoType {
  detail: string;
}

export interface MemoState {
  toDo: toDoType;
  memo: MemoType;
}

const initialState: MemoType = JSON.parse(
  localStorage.getItem("toDoMemo") || "[]"
);

const memo = createSlice({
  name: "toDoMemo",
  initialState,
  reducers: {
    changeMemo(state, action) {
      state.detail = action.payload;
      localStorage.setItem("toDoMemo", JSON.stringify(state));
    },
  },
});

export const { changeMemo } = memo.actions;

export default memo.reducer;
