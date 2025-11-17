import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function persistTodos(todos) {
    localStorage.setItem("todos", JSON.stringify({todos}));
  }
   function handleAddTodo(newTodo) {
    const allTodos = [...todos, newTodo];
    setTodos(allTodos);
    persistTodos(allTodos);
  }
  function handleDelete(todoIndex) {
    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(updatedTodos);
    persistTodos(updatedTodos);
  }
  function handleEdit(todoIndex) {
    const newTodo = todos[todoIndex];
    setInputValue(newTodo);
    handleDelete(todoIndex);
}
  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      persistTodos();
    } else {
      const localTodos = localStorage.getItem("todos");
      const storedTodos = JSON.parse(localTodos).todos;
      setTodos(storedTodos);
    }
  }, []);

  return (
    <>
      <TodoInput onAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} /> 
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  )
}

export default App
