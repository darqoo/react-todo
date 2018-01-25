import React, {Component} from 'react';

import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';



const style = {
    checked: {
        textDecoration: 'line-through'
    },
    unChecked: {
        color: 'green'
    }
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false,
        }
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked
        });
    }

    render() {
        return (
            <div>
                <ListItem button onClick = {this.handleChange}>
                    <input type="checkbox"/>
                    <ListItemText style={this.state.checked ? style.checked : style.unChecked} primary={this.props.label}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={(event) => {
                                this.props.delTask(this.props.index);
                                event.stopPropagation();
                            }}/>
                            </IconButton>
                            </ListItemSecondaryAction>
                </ListItem>

            </div>
        )
    }
}

export default Task;
