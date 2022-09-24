import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove, changeComplete, StateType } from "../store/todo";

export function ToDos({ text, id, completed }: StateType) {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(changeComplete({ id, completed: !completed }));
  };

  const onClick = () => {
    dispatch(remove(id));
    window.location.reload();
  };

  return (
    <li className="flex justify-between my-2 bg-[#EEEEEE] rounded">
      <label
        className={`${
          completed === true
            ? "border-[1px] after:content-['✔'] text-[9px]"
            : "border-[1px]"
        }
        inline-block mt-[14px] ml-[8px] w-[17px] h-[17px] border-[#797C84] `}
      >
        <input
          className="hidden"
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
        />
      </label>

      <Link to={`/${id}`}>
        <span
          className={`${
            completed === true
              ? "text-[#ACB5BD] line-through"
              : "text-[#797C84]"
          }
        flex text-[20px] p-2`}
        >
          {text}
        </span>
      </Link>
      <button
        className="bg-[#DD3645] text-[#ffffff] text-[15px] w-[40px] h-[30px] m-2 rounded"
        type="button"
        onClick={onClick}
      >
        del
      </button>
    </li>
  );
}
