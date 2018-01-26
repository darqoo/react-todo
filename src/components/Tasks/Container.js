import React, {Component} from 'react';
import TasksList from './TasksList';
import { connect } from 'react-redux';
import { add, search, remove, init } from '../state';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const mapStateToProps = state => ({
  tasksList: state.tasks.tasks,
  query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(add(task)),
  searchTask: value => dispatch(search(value)),
  removeTask: taskId => dispatch(remove(taskId)),
  initTasks: () => dispatch(init())
});

class Container extends Component {

    state = {
      task: ''
    }

    componentWillMount() {
      this.props.initTasks();
    }

  textChanged = (event) => {
    this.setState({task: event.target.value});
  }

  searchChanged = (event) => {
    this.props.searchTask(event.target.value);
  }

  handleSubmit = (event) => {
    this.props.addNewTask(this.state.task);
    this.setState({task: ''});
  }

  delTask = task => {
    this.props.removeTask(task);
  }

  render() {
    return (
      <div>
        <div className="submit_box">
            <TextField value={this.state.task} onChange={this.textChanged}/>
            <Button raised color="primary" mini="true" dense="true" onClick={this.handleSubmit}>Add</Button>
            <TextField placeholder="Search" onChange={this.searchChanged} className="search"/>
        </div>
        <div>
            <h2>My tasks</h2>
        </div>
            <TasksList
              query={this.props.query}
              tasks={this.props.tasksList}
              delTask={this.delTask}
            />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
