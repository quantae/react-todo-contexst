import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();
export const TodoContextProvider = ({ children }) => {
  //setInput state
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);

  /**
   * Assigns the value of the target element to the state variable setInputText,
   * and logs the value to the console.
   * @param {object} e - The event object containing the target element.
   * @return {void} This function does not return anything.
   */
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    //console.log(setInputText);
  };

  /**
   * Adds a click handler to the add button element that adds an item to a list of to-dos state
   * variable setToDos.
   * @param {Event} e - the event object for the click event
   * @return {void} nothing is returned
   */
  const addClickHandler = (e) => {
    e.preventDefault();
    console.log("Add btn clicked!");
    // const input = inputText;
    if (inputText === "") {
      alert("Please Input something you want to do");
    } else {
      setToDos([
        ...toDos,
        {
          todoText: inputText,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ]);
      console.log("toDos arr: ", toDos);
      localSave();
    }
    setInputText(""); // Clears the input text field to empty.
  };
/**
   * UseEffect for getLocaSave to run only once.
   * when the App starts.
   */
useEffect(() => {
  getLocalSave();
}, []);

  /**
   * Adds a use effect which ensures that the filterHandler runs any time toDos or status changes,
   *
   */
  useEffect(() => {
    console.log("useEffect initiated..");
    filterHandler();
    localSave();
  }, [toDos, status]);

  

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredToDos(
          toDos.filter((todolist) => todolist.completed === true)
        );
        break;
      case "Pending":
        setFilteredToDos(
          toDos.filter((todolist) => todolist.completed === false)
        );
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  const statusHandler = (e) => {
    /* console.log(e.target.value)
    setStatus(e.target.value)
    console.log('Status list clicked: ', e.target.value) */
    setStatus(e.target.textContent);
    console.log("click list item: ", e.target.textContent);
    console.log("checking state of status: ", status);
  };

  const localSave = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };

  const getLocalSave = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("toDos"));
      if (localTodo.length > 0){
        setToDos(localTodo);
      console.log('local Todo',localTodo)
      }
      
    }
  };

  return (
    <TodoContext.Provider
      value={{
        inputText,
        toDos,
        setToDos,
        inputTextHandler,
        addClickHandler,

        status,
        setStatus,
        filteredToDos,
        filterHandler,
        statusHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
