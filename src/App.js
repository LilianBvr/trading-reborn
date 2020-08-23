import React from 'react';
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import Home from './Home'
import NousRejoindre from './NousRejoindre'
import FourOFour from './FourOFour'

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/rejoindre'>
            <NousRejoindre />
          </Route>

          <Route exact path='/404'>
            <FourOFour />
          </Route>

          <Route exact path='*'>
            <Redirect to='/404'></Redirect>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
