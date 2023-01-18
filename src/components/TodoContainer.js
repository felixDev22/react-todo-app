import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Navbar from './Navbar';
import InputTodo from './InputTodo';

function InitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodoContainer = () => {
  const [todos, setTodos] = useState(InitialTodos()); // eslint-disabled-line

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const addTodosTask = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <InputTodo addTodosTask={addTodosTask} />
      </div>
    </>
  );
};

export default TodoContainer;
