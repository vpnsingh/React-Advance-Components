import React from "react";

//redux
import { connect } from "react-redux";
import { removeTodo } from "../../action/action";

const Todo = ({ todos, markComplete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
          <p className='text-primary fw-bold mb-0'> 
            {index+1} - {todo.title} 
          </p> 
          <button className='btn btn-danger btn-sm' onClick={() => markComplete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
