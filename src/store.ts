import React from 'react';
import { configureStore, createSlice } from "@reduxjs/toolkit";

interface stateType {
  text?:string;
  id:number;
}

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [] as stateType[],
  reducers : {
    add: (state, action) => {
      state.push({text:action.payload, id:Date.now()});
    },
    remove: (state, action) => 
        state.filter(toDo => toDo.id !== action.payload)
  }
})

export const { add, remove } = toDos.actions;

export default configureStore({reducer : toDos.reducer});