import React from "react";
import TodoContextProvider from "../context/TodoContext";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import AddIcon from "@mui/icons-material/Add";
/**
 * Renders a form element containing input field, add button, and a select dropdown.
 *
 * @return {JSX.Element} The form element.
 */
function Form() {
  const { inputText, statusHandler, inputTextHandler, addClickHandler } =
    useContext(TodoContext);
  return (
    <div>
      <form>
        <div className="input-container">
          <input
            placeholder="What's your task today"
            value={inputText}
            type="text"
            className="todo-input"
            onChange={inputTextHandler}
          />
          <button
            className="todo-button"
            type="submit"
            onClick={addClickHandler}
          >
            <AddIcon />
          </button>
        </div>
      </form>
     {/**
      * <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      */} 
      
    </div>
  );
}

export default Form;
