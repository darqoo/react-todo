import React from 'react';
import Task from './Task';

const TasksList = (props) => (

  <div className="List">
    {props.tasks
      .filter(task => task.name.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
      .reverse()
      .map(task => (
        <Task
          key={`task-${task.id}`}
          checked={task.checked}
          label={task.name}
          date={task.date}
          checkboxChange={() => props.checkboxChange(task.id, task.checked)}
          delTask={() => props.delTask(task.id)}/>
      ) )
    }
  </div>
);

  export default TasksList;
