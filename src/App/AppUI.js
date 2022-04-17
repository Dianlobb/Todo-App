import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    filtertodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h1 className="Title__Todo">My TODO</h1>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {() => {
          return (
            <TodoList>
              {error && <TodosError error={error} />}
              {loading && <TodosLoading/>}
              {!loading && !filtertodos.length && <EmptyTodos/>}
              {filtertodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                />
              ))}
            </TodoList>
          );
        }}
      </TodoContext.Consumer>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default AppUI;
