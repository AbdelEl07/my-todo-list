import { useState } from "react";
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"


const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const saveTodo = () => {
    let newTodo = {
      name: text,
    };

    let _todoList = [...todoList];
    _todoList.push(newTodo);
    setTodoList(_todoList);
    setText(""); // reset input
  };

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const deleteTask = (indexToDelete) => {
    const filteredList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(filteredList);
  };
  return (
    <>
      <TodoInput text={text} inputChange={inputChange} saveTodo={saveTodo}/>
      <TodoList todoList= {todoList} deleteTask={deleteTask}/>
    </>
  );
};

export default Todo;
