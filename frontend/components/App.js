import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // Array to store tasks
      todo: '', // To manage the current task input
      hideCompleted: false, // Boolean to determine if completed tasks should be hidden
    };
  }

  // Handler to update the 'todo' state based on input field
  handleTodoChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  // Handler to add the current 'todo' to the task list
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    const { todo, tasks } = this.state;

    if (todo.trim()) {
      const newTask = { id: Date.now(), text: todo, completed: false };
      this.setState({ tasks: [...tasks, newTask], todo: '' });
    }
  };

  // Handler to toggle task completion
  handleTodoToggle = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  // Handler to delete a task
  handleDeleteTask = (taskId) => {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: filteredTasks });
  };

  // Handler to toggle hiding of completed tasks
  handleHideCompleted = () => {
    this.setState((prevState) => ({ hideCompleted: !prevState.hideCompleted }));
  };

  render() {
    const { tasks, todo, hideCompleted } = this.state;
  
    const visibleTasks = hideCompleted ? tasks.filter((task) => !task.completed) : tasks;
  
    return (
      <div>
        <h1>Todos:</h1>
        <ul>
          {visibleTasks.map((task) => (
            <li
              key={task.id}
              onClick={() => this.handleTodoToggle(task.id)}
              style={{
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {task.text}{' '}
              {task.completed && <span style={{ fontWeight: 'bold', color: 'black' }}>✔</span>}
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            value={todo}
            onChange={this.handleTodoChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.handleHideCompleted}>
          {hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </button>
      </div>
    );
  }  
}

