import React, {Component} from 'react';
import TasksList from './TasksList';

class Container extends Component {

  constructor(props) {
    super(props);
    this.textChanged = this.textChanged.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      query: '',
      task: '',
      tasks: [],
      delTask: (index) => {
          let tasks = this.state.tasks;
          tasks.splice(index, 1);
          this.setState({
              tasks
          })
      }
    };
  }

  textChanged(event) {
    this.setState({task: event.target.value});
  }

  searchChanged(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.state.task !== '' ?
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        })
    : console.log('null') ;

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="submit_box">
            <form onSubmit={this.handleSubmit}>
              <input className="input_add"
                     type="text"
                     value={this.state.task}
                     placeholder="Add task..."
                     onChange={this.textChanged}/>
              <input className="submit_btn"
                     type="submit"
                     value="Add"/>
            </form>

            <input  className="input_search" type="text" placeholder="Search..." onChange={this.searchChanged} />
        </div>
        <div>
            <h2>My tasks</h2>
        </div>
            <TasksList
              query={this.state.query}
              tasks={this.state.tasks}
              delTask={this.state.delTask}
            />
      </div>
    );
  }
}

export default Container;
