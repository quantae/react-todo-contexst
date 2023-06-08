import "../App.css";
import React from "react";
import Form from "../components/Form";
import ToDoList from "./ToDoList";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Logo from "./Logo";
import UserProfileDetails from "./UserProfileDetails";

function MainPage() {
  const { statusHandler, status } = useContext(TodoContext);

  const Header = () => (
    <header className="main-section-header">
      <h4>Todolify</h4>
      <h5>Design Organize Repeat</h5>
    </header>
  );
  const SideNav = () => (
    <div className="category-list">
      <h5 className="task-categories-headen">Task categories</h5>
      <li
        onClick={statusHandler}
        className={`${status === "All" ? "category-list-active" : ""}`}
      >
        All
      </li>
      <li
        onClick={statusHandler}
        className={`${status === "Pending" ? "category-list-active" : ""}`}
      >
        Pending
      </li>
      <li
        onClick={statusHandler}
        className={`${status === "Completed" ? "category-list-active" : ""}`}
      >
        Completed
      </li>
      <span
        className={`list-category-highlight 
            ${status === "All" ? "highlight-all" : ""}
            ${status === "Pending" ? "highlight" : ""}
            ${status === "Completed" ? "highlight" : ""}`}
      />
    </div>
  );

  const AppVersion = () => {
    return (
      <div className="settings-container">
        <span className="version">version 1.0.0</span>
      </div>
    );
  };
  return (
    <>
      <main className="grid-container">
        <section className="left-section">
          <header className="todolify-header">
            <Header />
          </header>
          <div className="">
            <UserProfileDetails />
            <hr id="horizontal-line"></hr>
          </div>
          <div>
            <SideNav />
          </div>
          <div className="app-version-container">
            {/* <AppVersion />*/}
          </div>
          
        </section>
        <section className="right-section">
          <Header />
          <Form />
          <ToDoList />
        </section>
      </main>
    </>
  );
}

export default MainPage;
