import React from "react";
import { useLocalStorage } from "./useLocalstorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: false },
// ];
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const filtertodos = searchValue
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : todos;
  const completedTodos = filtertodos.filter((todo) => !!todo.completed).length;
  const totalTodos = filtertodos.length;

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false })
    saveTodos(newTodos);
  };


  const deleteTodos = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filtertodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
