import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMemo, MemoState } from "../store/memo";

export function ToDoMemo() {
  const [value, setText] = useState("");
  const state = useSelector((state: MemoState) => state.memo);

  const dispatch = useDispatch();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(changeMemo(value));
    setText("");
  }

  function changeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-col content-between h-full">
      <div className="h-4/6">
        <span className="text-[40px] flex justify-center pt-4">메모</span>
        <div className="m-2 pt-3 text-[20px] text-[#797C84]">
          {state.detail}
        </div>
      </div>
      <div className="h-2/6 pt-5">
        <form className="flex justify-between h-full" onSubmit={onSubmit}>
          <textarea
            className="border-2 border-[#eeeeee] w-5/6 h-full rounded px-4 pt-3"
            placeholder="메모를 적어보세요."
            value={value}
            onChange={changeTextarea}
          />
          <button
            className="bg-[#0DCAF0] text-[#ffffff] text-[25px] w-[40px] h-full rounded"
            type="submit"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}
