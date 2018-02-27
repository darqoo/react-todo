import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Task from './Task';
import 'typeface-roboto'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  tasksList: state.tasks.tasks,
  query: state.tasks.query,
  state: state.tasks.state
});

class TasksList extends Component {

 render() {
   return (
     <div className="List">
     {this.props.reverse[0]
       ? this.props.tasks
       .filter(task => task.name.toUpperCase().indexOf(this.props.query.toUpperCase()) !== -1)
       .reverse()
       .map(task => (
         <Task
           key={`task-${task.id}`}
           checked={task.checked}
           label={task.name}
           date={task.date}
           checkboxChange={() => this.props.checkboxChange(task.id, task.checked)}
           delTask={() => this.props.delTask(task.id)}/>
       ))
       : this.props.tasks
         .filter(task => task.name.toUpperCase().indexOf(this.props.query.toUpperCase()) !== -1)
         .map(task => (
           <Task
             key={`task-${task.id}`}
             checked={task.checked}
             label={task.name}
             date={task.date}
             checkboxChange={() =>
               this.props.checkboxChange(task.id, task.checked)}
             delTask={() => this.props.delTask(task.id)}/>
         ))
     }
   </div>
 )}

}

export default connect(mapStateToProps)(TasksList);
