import React from 'react';
import Todo from './Todo';  // Import the Todo component

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;  // Get the todos from the props

    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <Todo todo={todo} />  {/* Pass each todo to the Todo component */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

