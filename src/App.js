import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from './logo.svg';
import './assets/css/mycss.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Wrap from './views/wrapArtikel';
import WrapCms from './views/wrapCms';
const tees = () => {
  return (
    <h1>Not FOund</h1>
  )
}


const App = () => {
  return (
    <Router>

      <Switch>

      <Route path='/' exact render={props => <Wrap {...props} />} />
      <Route path='/artikel/:id' render={props => <Wrap {...props} />} />
      <Route path='/artmin' render={props => <WrapCms {...props} />} />
      <Route path='/ksrt' render={props => <WrapCms {...props} />} />

      <Route render={tees}  />
      </Switch>
      
      {/* <Route path='/ksrt/1' render={props => <WrapCms {...props} />} /> */}

    </Router>
  )
}

export default App;
