import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import UsersList from './components/UsersList'

function App() {



  return (
    <Router >
      <h1>Hello World</h1>
      <Switch>
        <Route exact path='/' component={UsersList} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
