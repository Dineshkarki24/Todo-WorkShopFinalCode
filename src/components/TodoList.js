import React from "react";

class TodoList extends React.Component {
  state = {
    showHide: false,
    dailyTask: ""
  };
  handleClick = () => {
    this.props.delete(this.props.task.id);
  };
  handleEdit = () => {
    this.setState({ showHide: !this.state.showHide });
  };
  handleonChange = e => {
    this.setState({ dailyTask: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.edit({
      id: this.props.task.id,
      dailyTask: this.state.dailyTask
    });
    this.setState({ showHide: false });
  };
  render() {
    console.log(this.props.task.dailyTask);
    if (this.state.showHide) {
      return (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="task">Daily Task</label>
          <input
            value={this.state.dailyTask}
            onChange={this.handleonChange}
            type="text"
            placeholder="Add Task"
          />
          <button type="submit">Add</button>
        </form>
      );
    } else {
      return (
        <div>
          <ul>
            <li>{this.props.task.dailyTask}</li>
            <button type="button" onClick={this.handleClick}>
              Delete
            </button>
            <button type="button" onClick={this.handleEdit}>
              edit
            </button>
          </ul>
        </div>
      );
    }
  }
}

export default TodoList;
