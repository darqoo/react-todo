import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Checkbox from 'material-ui/Checkbox';

const style = {
  checked: {
    textDecoration: 'line-through',
    color: "red"
  },
  unChecked: {}
}

class Task extends Component {

  render() {
    return (
      <div>
        <ListItem>
          <Checkbox
            checked={this.props.checked}
            onChange={this.props.checkboxChange}/>
          <ListItemText
            style={this.props.checked ? style.checked : style.unChecked}
            primary={this.props.label}
            secondary={this.props.date}/>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete">
                <DeleteIcon
                onClick={this.props.delTask}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    )
  }
}

export default Task;
