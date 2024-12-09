import React from 'react';

export default class Todo extends React.Component {
  render() {
    // Access the todo prop from this.props
    const { todo } = this.props;

    return (
      <div>
        <p>{todo.task}</p>  {/* Display the task of the todo */}
      </div>
    );
  }
}