import React from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
    return this.props.farts.map((todo)=> (
        <TodoItem key={todo.id} smarts = {todo} markComplete = {this.props.markCompleted} delTodo = {this.props.delTodos} />
    ))
}
};

// PropTypes
Todos.propTypes = {
    farts: PropTypes.array.isRequired,
    markCompleted:PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired
}
export default Todos;