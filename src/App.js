import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TodoContextProvider from "./context/TodoContext";
import ToDoList from "./components/ToDoList";
import MainLayout from "./components/MainLayout";
import MainPage from "./components/MainPage";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MainLayout>
          <MainPage />
      
        </MainLayout>
      </TodoContextProvider>
    </div>
  );
}

export default App;
