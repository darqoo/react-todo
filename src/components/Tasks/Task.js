import React, {Component} from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
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

        state = {
            checked: false,
        }

        handleChange = (event) => {
          this.setState({
            checked: !this.state.checked
          });
        }

    render() {
        return (
            <div>
                <ListItem>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleChange}
                />
                    <ListItemText style={this.state.checked ? style.checked : style.unChecked} primary={this.props.label}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={this.props.delTask}/>
                            </IconButton>
                            </ListItemSecondaryAction>
                </ListItem>

            </div>
        )
    }
}

export default Task;
