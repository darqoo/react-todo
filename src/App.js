import React from 'react';
import Grid from 'material-ui/Grid';

import Header from './components/Header';
import TaskContainer from './components/Tasks/Container';
import Paper from 'material-ui/Paper';
import './App.css';

const App = (props) => (
  <div>
    <Paper className="paper_padding">
      <Header/>
      <TaskContainer/>
    </Paper>
  </div>
)

export default App;
