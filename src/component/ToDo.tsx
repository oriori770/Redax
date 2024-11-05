import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/Store";
import { completed } from "../Store/features/toDo/toDoSlice";

const ToDo = () => {
    const toDo = useSelector((state: RootState) => state.toDo.todos);
    const dispatch = useDispatch();
    const tasksCompleted: number = toDo.filter((todo) => todo.completed).length


  return (
    <>
    <div>ToDo</div>
    <h3>Tasks completed: {tasksCompleted} </h3>
    {toDo.map((todo) => (
        <div key={todo.id}>
            {todo.name}
            <br />
            {todo.description}
            <br />
            status:{todo.completed? "  done" : " not done"}
            {<button onClick={() => dispatch(completed(todo.id))}>{todo.completed ? "undo" : "done"}</button>}
        </div>
    ))}
    </>
  )
}

export default ToDo