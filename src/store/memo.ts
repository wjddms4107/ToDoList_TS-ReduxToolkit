import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MemoType {
  detail: string;
}

// export interface MemoState {
//   toDo: ToDoType[];
//   memo: MemoType;
// }

const initialState: MemoType = JSON.parse(
  localStorage.getItem("toDoMemo") || "[]"
);

const memo = createSlice({
  name: "toDoMemo",
  initialState,
  reducers: {
    changeMemo(state, action: PayloadAction<string>) {
      state.detail = action.payload;
      localStorage.setItem("toDoMemo", JSON.stringify(state));
    },
  },
});

export const { changeMemo } = memo.actions;

export default memo.reducer;
