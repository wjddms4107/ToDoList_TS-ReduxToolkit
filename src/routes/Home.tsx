import React from "react";
import { useSelector } from "react-redux";
import { ToDoList } from "../components/ToDoList";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoClearAll } from "../components/ToDoClearAll";
import { ToDoMemo } from "../components/ToDoMemo";
import { RootState } from "../store/store";

export function Home() {
  const toDos = useSelector((state: RootState) => state.toDo);

  return (
    <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
      <section className="w-[460px] p-8 mx-8 shadow-2xl">
        <h1 className="text-[40px] flex justify-center py-4 ">오늘 할 일</h1>
        <ul>
          {toDos.map(({ text, id, completed }) => (
            <ToDoList key={id} text={text} id={id} completed={completed} />
          ))}
        </ul>
        <ToDoForm />
        <ToDoClearAll />
      </section>
      <section className="w-[460px] p-8 mx-8 shadow-2xl">
        <ToDoMemo />
      </section>
    </article>
  );
}
