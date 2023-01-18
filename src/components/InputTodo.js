/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ addTodosTask }) => {
  const [inputTodo, setInputTodo] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputTodo({
      ...inputTodo,
      [e.target.name]: e.target.value,
    });
  };

  // To prevent empty entries
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTodo.title.trim()) {
      addTodosTask(inputTodo.title);
      setInputTodo({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please add a Task');
    }
  };

  return (
    <form
      className="form-area"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        className="task-input"
        value={inputTodo.title}
        name="title"
        onChange={onChange}
      />
      <button
        type="submit"
        className="add-Btn">
        Add
      </button>
    </form>
  );
};

FormInput.propTypes = {
  addTodosTask: PropTypes.func.isRequired,
};

export default FormInput;
