import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function ToDo({todoText, todolist}) {
  const {toDos, setToDos} = useContext(TodoContext);

  const deleteHandler = () => {
    console.log("Delete btn clicked!");
    setToDos(toDos.filter((el) => el.id !== todolist.id));
  };

  
  const completeHandler = () => {
    setToDos(
      toDos.map((todoComplete) => {
        if (todoComplete.id === todolist.id) {
          return {
            ...todoComplete,
            completed: !todolist.completed,
          };
        }
        return todoComplete;
      })
    );
  }

 
  return (
    <div className="todo">
      <li className={`todo-item ${todolist.completed ? "completed" : ""}`}>{todoText}</li>
        <button 
        onClick={completeHandler}
        className='complete-btn'><CheckCircleOutlineOutlinedIcon fontSize="small" /></button>

        <button 
        onClick={deleteHandler}
        className="trash-btn"><DeleteIcon fontSize="small"/></button>
      
    </div>
  );
}

export default ToDo;
