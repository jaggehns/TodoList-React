import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    //comparing element that is clicked on with
    //the todo.id in the todos array
    //if match, remove the element
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
