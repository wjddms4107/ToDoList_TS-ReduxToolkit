import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToDoType {
  text: string;
  id: number;
  completed: boolean;
}

const initialState: ToDoType[] = JSON.parse(
  localStorage.getItem("toDos") || "{}"
);

const toDos = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      state.push({
        text: action.payload,
        id: state.length === 0 ? 1 : nextId,
        completed: false,
      });
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    remove(state, action: PayloadAction<number>) {
      state = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    allRemove(state) {
      state = [];
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    changeComplete(
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    // changedetail(state, action) {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].detail = action.payload.value;
    //   localStorage.setItem("toDos", JSON.stringify(state));
    // },
  },
});
export const { add, remove, changeComplete, allRemove } = toDos.actions;

export default toDos.reducer;
