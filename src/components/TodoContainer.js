import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Navbar from './Navbar';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

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

  const handleChange = (id) => {
    setTodos((initialState) => initialState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const addTodosTask = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((initialState) => initialState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <InputTodo addTodosTask={addTodosTask} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </>
  );
};

export default TodoContainer;
