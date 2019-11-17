import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends React.Component {
  state = {
    task: [
      { id: 1, dailyTask: "Coding" },
      { id: 2, dailyTask: "Chating" },
      { id: 3, dailyTask: "Eating" }
    ]
  };
  handleFormData = formData => {
    let id = this.state.task.length + 1;
    let dailyTask = { id: id, ...formData };
    this.setState({ task: [...this.state.task, dailyTask] });
  };
  handleDelete = id => {
    let filterData = this.state.task.filter(function(task) {
      return task.id !== id;
    });
    console.log(id);
    this.setState({ task: filterData });
  };
  handleEdit = editData => {
    let updateData = this.state.task.map(function(task) {
      if (task.id === editData.id) {
        return editData;
      }
      return task;
    });
    this.setState({ task: updateData });
  };
  render() {
    // let arr1 = [1, 2, 3];
    // let arr2 = [...arr1, 4, 5, 6];
    // console.log(arr2);
    return (
      <div>
        <h1>Add Your Daily Task</h1>
        <TodoForm recForm={this.handleFormData} />
        {this.state.task.map(task => (
          <TodoList
            edit={this.handleEdit}
            delete={this.handleDelete}
            key={task.id}
            task={task}
          />
        ))}
      </div>
    );
  }
}
export default Todo;
