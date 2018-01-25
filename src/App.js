import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import TaskContainer from './components/Tasks/Container';
import Paper from 'material-ui/Paper';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Paper className="paper_padding">
          <Header/>
          <Route exact path="/" component={TaskContainer}/>
          </Paper>
        </div>
      </Router>
    );
  }
}

export default App;
