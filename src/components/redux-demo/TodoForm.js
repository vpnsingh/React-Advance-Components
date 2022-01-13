import React, { useState } from "react";
import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../../action/action";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group mb-3">
          <input 
            type="text"
            className="form-control"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='btn btn-outline-success' onClick={handleSubmit}>Add Todo</button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
