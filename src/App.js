import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './layouts/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Redirect to='/' />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
}

export default App;
