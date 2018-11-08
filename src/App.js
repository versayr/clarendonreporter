import React, { Component }     from 'react';
import { BrowserRouter as 
  Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login  from './components/login';
import Home   from './components/home';
import Report from './components/report';
import Bakery from './components/bakery';
import Order  from './components/order';

const MainMenu = () => (
  <header className="navbar navbar-expand navbar-light flex-column flex-md-row bg-light">
    <Link className="" to="/home">
      <span className="navbar-brand mb-1 h1">Clarendon Reporter</span>
    </Link>
    <div className="navbar-nav-scroll">
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <Link className="nav-link" to="/clarendon-report">
            Report
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clarendon-order">
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bakery">
            Bakery
          </Link>
        </li>
      </ul>
    </div>
    <Link className="nav-item nav-link ml-md-auto" to="/">
      Login
    </Link>
  </header>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MainMenu />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/clarendon-report" component={Report} />
            <Route exact path="/clarendon-order" component={Order} />
            <Route exact path="/bakery" component={Bakery} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
