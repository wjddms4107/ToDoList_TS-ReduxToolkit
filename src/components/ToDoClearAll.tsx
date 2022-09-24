import React from "react";
import { useDispatch } from "react-redux";
import { allRemove } from "../store/todo";

export function ToDoClearAll() {
  const dispatch = useDispatch();

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
