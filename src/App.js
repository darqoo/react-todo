import React from 'react';
import 'typeface-roboto'
import Grid from 'material-ui/Grid';

import Header from './components/Header';
import TaskContainer from './components/Tasks/Container';
import Paper from 'material-ui/Paper';
import './App.css';

const App = (props) => (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Paper className="paper_padding">
          <Header/>
          <TaskContainer/>
        </Paper>
      </Grid>
    </Grid>
    
)

export default App;
