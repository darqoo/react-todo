import React from 'react';
import Task from './Task';

const TasksList = (props) => (

            <div className="List">
                {props.tasks
                    .filter(task => task.name.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
                    .map(task => (
                        <Task
                            key={`task-${task.id}`}
                            label={task.name}
                            delTask={() => props.delTask(task.id)}
                        />
                    ))}
           </div>
       );

export default TasksList;
