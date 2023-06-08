/***
 * This component lists the individual
 * todo lists.
 */

import React, { useContext } from "react";
import TodoContextProvider, { TodoContext } from "../context/TodoContext";
import ToDo from "./ToDo";

export default function ToDoList() {
  const { toDos, filteredToDos } = useContext(TodoContext);
  console.log("Filtered Todo", filteredToDos);
  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredToDos.map((todolist) => (
          <ToDo
            key={todolist.id}
            todolist={todolist}
            todoText={todolist.todoText}
            toDos={toDos}
          />
        ))}
      </div>
    </div>
  );
}
