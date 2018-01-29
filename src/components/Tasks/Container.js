import React, {Component} from 'react';
import TasksList from './TasksList';
import {connect} from 'react-redux';
import {add, search, remove, checkboxChange, init, sortByDate} from '../state';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import {ListItem, ListItemText} from 'material-ui/List';

const mapStateToProps = state => ({
  tasksList: state.tasks.tasks,
  query: state.tasks.query,
  state: state.tasks.state
});

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(add(task)),
  searchTask: value => dispatch(search(value)),
  checkboxChange: (taskId, checked) => dispatch(checkboxChange(taskId, checked)),
  sortByDate: (stateOfReverse) => dispatch(sortByDate(stateOfReverse)),
  removeTask: taskId => dispatch(remove(taskId)),
  initTasks: () => dispatch(init())
});

class Container extends Component {

  state = {
    name: '',
    checked: false,
    date: ''
  }

  componentWillMount() {
    this.props.initTasks();
  }

  textChanged = (event) => {
      let date = new Date();
      let time = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
    this.setState({
      name: event.target.value,
      date: time
    });
  }

  searchChanged = (event) => {
    this.props.searchTask(event.target.value);
  }

  handleSubmit = (event) => {
    if (this.state.name) {
      this.props.addNewTask(this.state);
      this.setState({name: ''});
    }
  }

  delTask = task => {
    this.props.removeTask(task);
  }

  onPressEnterKey = (event) => {
    if (event.charCode === 13 && this.state.name) {
      event.preventDefault();
      this.props.addNewTask(this.state);
      this.setState({name: ''});
    }
  }

  checkboxChange = (task, checked) => {
    this.props.checkboxChange(task, checked);
  }

  sortByDate = (stateOfReverse) => {
    this.props.sortByDate(this.props.state[0]);
  }


  render() {
    return (
      <div>
        <div className="submit_box">
          <TextField
            value={this.state.name}
            onChange={this.textChanged}
            onKeyPress={this.onPressEnterKey}/>
          <Button
            raised="raised"
            color="primary"
            mini="true"
            dense="true"
            onClick={this.handleSubmit}>
            Add
          </Button>
          <TextField
            placeholder="Search"
            onChange={this.searchChanged}
            className="search"/>
        </div>
        <div>
          <h2>My tasks</h2>
        </div>
        <TasksList
          query={this.props.query}
          tasks={this.props.tasksList}
          reverse={this.props.state}
          checkboxChange={this.checkboxChange}
          delTask={this.delTask}/>
        <ListItem>
        <Switch onClick={this.sortByDate}/>
          <ListItemText
            primary="Sort by date"/>
        </ListItem>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
