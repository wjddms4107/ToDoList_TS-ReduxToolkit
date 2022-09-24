import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../store/todo";
import { ToDos } from "../components/ToDoList";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoClearAll } from "../components/ToDoClearAll";

export interface toDoType {
  toDo: StateType[];
}

export function Home() {
  const toDos = useSelector((state: toDoType) => state.toDo);

  return (
    <div className="w-[460px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-2xl">
      <span className="text-[40px] flex justify-center py-4 ">오늘 할 일</span>
      <ul>
        {toDos.map(({ text, id, completed }) => (
          <ToDos key={id} text={text} id={id} completed={completed} />
        ))}
      </ul>
      <ToDoForm />
      <ToDoClearAll />
    </div>
  );
}
