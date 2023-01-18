/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import trash from '../images/trash.svg';
import styles from '../index.css';

const TodoItem = ({
  todo,
  handleChangeProps,
  deleteTodoProps,
  setUpdate,
}) => {
  const { completed, id, title } = todo;
  const [edit, setEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(title);

  useEffect(() => () => {}, []);

  const handleEdit = () => {
    setEdit(true);
  };

  const onChangeHandler = (e) => {
    setUpdateTodo(e.target.value);
  };

  const handleUpdate = (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
      setUpdate(updateTodo, id);
    }
  };

  const completedTask = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <div className={styles.item}>
      <div className="todo-Container">
        <div
          onDoubleClick={handleEdit}
          style={viewMode}
        >
          <input
            type="checkbox"
            id="check"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button
            type="button"
            className="trash"
            onClick={() => deleteTodoProps(id)}
          >
            <img
              src={trash}
              alt="trash"
            />
          </button>
          <span style={completed ? completedTask : null}>{updateTodo}</span>
        </div>
        <input
          type="text"
          id="text"
          style={editMode}
          className={styles.textInput}
          value={updateTodo}
          onChange={onChangeHandler}
          onKeyDown={handleUpdate}
        />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
