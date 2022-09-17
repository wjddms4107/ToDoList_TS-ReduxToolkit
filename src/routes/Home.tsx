import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store';
import { ToDo } from '../components/ToDo';

interface stateType {
  text:string;
  id:number;
}

export function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state:stateType[]) => state);
  const dispatch = useDispatch();

  function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>):void {
    setText(e.target.value);
  }

  return (
    <>
    <h1>정은 ToDoList</h1>
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit">Add</button>
      <ul>
        {toDos.map(toDo => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ToDo {...toDo} />
        ))}
      </ul>
    </form>
    </>
  )
}
