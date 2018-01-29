import {database} from '../firebase';

const FILTER_TASKS = 'FILTER_TASKS';
const POPULATE_TASKS = 'POPULATE_TASKS';
const STATE_OF_APP = 'STATE_OF_APP';

export const add = task => dispatch => {
  database.ref('/tasks').push(task)
};

export const search = value => ({
  type: FILTER_TASKS,
  value
});



export const checkboxChange = (taskId, checked) => dispatch => {
  database.ref(`/tasks/${taskId}`)
  .update({
      checked: !checked
  })
};

export const sortByDate = (stateOfReverse) => dispatch => {
  database.ref(`/state/`)
  .update({
      reverse: !stateOfReverse
  })
};

export const remove = taskId => dispatch => {
  database.ref(`/tasks/${taskId}`).remove()
};

export const populate = tasks => ({
  type: POPULATE_TASKS,
  tasks
});

export const stateOfApp = state => ({
  type: STATE_OF_APP,
  state
});


export const init = () => dispatch => {
  database.ref('/tasks')
    .on('value', (snapshot) => {
      const firebaseData = Object.entries(
        snapshot.val() || {}
      );

      const data = firebaseData.map(([id, value]) => {
        value.id = id;
        return value;
      });

      dispatch(populate(data));
    });

    database.ref('/state')
      .on('value', (snapshot) => {
        const firebaseData1 = Object.entries(
          snapshot.val() || {}
        );

        const data1 = firebaseData1.map(([id, value]) => {
          return value;
        });

        dispatch(stateOfApp(data1));
      });
};

const INITIAL_STATE = {
  query: '',
  state: '',
  tasks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return {
        ...state,
        query: action.value
      }
    case POPULATE_TASKS:
      return {
        ...state,
        tasks: action.tasks
      }
    case STATE_OF_APP:
      return {
        ...state,
        state: action.state
      }
    default:
      return state;
  }
}
