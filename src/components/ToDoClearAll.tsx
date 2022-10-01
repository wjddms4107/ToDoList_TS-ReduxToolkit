import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { allRemove } from "../store/todo";

export function ToDoClearAll() {
  const dispatch: Dispatch = useDispatch();

  function handleClearAll() {
    dispatch(allRemove());
    window.location.reload();
  }

  return (
    <button
      className="bg-[#DD3645] text-[#ffffff] text-[20px] w-[100px] h-[50px] rounded"
      type="submit"
      onClick={handleClearAll}
    >
      Clear All
    </button>
  );
}
