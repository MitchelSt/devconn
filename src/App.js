import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Redirect to='/' />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
