import React from "react";

class TodoForm extends React.Component {
  state = {
    dailyTask: ""
  };
  handleClick = e => {
    this.setState({ dailyTask: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.recForm(this.state);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h5>Todo Form</h5>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="task">Daily Task</label>
          <input
            value={this.state.dailyTask}
            onChange={this.handleClick}
            type="text"
            placeholder="Add Task"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
