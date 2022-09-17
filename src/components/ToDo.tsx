import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

export function ToDo(toDo: {id:number, text:string}) {
  const { text, id } = toDo;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(remove(id));
  }
  
  return (
    <li> <Link to={`/${id}`}>
    {text} 
    </Link><button type="button" onClick={onClick}>del</button></li>
  )
}