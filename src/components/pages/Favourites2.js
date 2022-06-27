import React from "react";
import { ButtonFAV2 } from "../ButtonFAV2";
import "./Favourites2.css";

const Favourites2 = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>whr2eat tomorrow ?</h1>
      <h2>SAVE YOUR FAVOURITES NOW !</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <ButtonFAV2 
          className='btns'
          buttonStyle='btn--secondary' 
          type="submit">
          <i class="fa-solid fa-plus"></i>
        </ButtonFAV2>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-input">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <ButtonFAV2
              className='btns'
              buttonStyle='btn--outline' 
              onClick={() => submitEdits(todo.id)}>
                CHANGE <i class="fa-solid fa-arrows-rotate"></i>
              </ButtonFAV2>
            ) : (
              <ButtonFAV2 
              className='btns'
              buttonStyle='btn--outline' 
              onClick={() => setTodoEditing(todo.id)}
              >
                EDIT <i class="fa-solid fa-pen"></i>
              </ButtonFAV2>
            )}

            <ButtonFAV2
            className='btns'
            buttonStyle='btn--outline'
            onClick={() => deleteTodo(todo.id)}>
              DELETE <i class="fa fa-trash"></i>
            </ButtonFAV2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites2;