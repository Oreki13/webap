import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import logo from "./logo.svg";
import "./assets/css/mycss.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Wrap from "./views/wrapArtikel";
// import dotEnv from "dotenv";
import WrapCms from "./views/wrapCms";
console.log(window.location.pathname.split("/"));

const tees = () => {
  return <h1>Not FOund</h1>;
};

const App = () => {
  // dotEnv.config();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Wrap {...props} />} />
          <Route path="/artikel/:id" render={(props) => <Wrap {...props} />} />
          <Route path="/artmin" render={(props) => <WrapCms {...props} />} />
          <Route path="/ksrt" render={(props) => <WrapCms {...props} />} />
          <Route path="/setting" render={(props) => <WrapCms {...props} />} />

          <Route render={tees} />
        </Switch>

        {/* <Route path='/ksrt/1' render={props => <WrapCms {...props} />} /> */}
      </Router>
    </Provider>
  );
};

export default App;
