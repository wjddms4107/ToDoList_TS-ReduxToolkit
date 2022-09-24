import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todo";

export function ToDoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  return (
    <form className="flex justify-between py-4 pt-14" onSubmit={onSubmit}>
      <input
        className="border-2 border-[#eeeeee] w-5/6 rounded pl-3"
        type="text"
        value={text}
        placeholder="오늘 할 일을 적어보세요."
        onChange={onChange}
      />
      <button
        className="bg-[#0DCAF0] text-[#ffffff] text-[25px] w-[40px] h-[40px] rounded"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
