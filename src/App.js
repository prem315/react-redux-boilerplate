import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'

const App = ({history}) => {
  return(
    <ConnectedRouter history={history}>
      <Link to="/">Home Page</Link>
      <Link to="/about">ABout Page</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App;
