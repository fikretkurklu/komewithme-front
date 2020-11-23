import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";

import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Home from "./containers/Home/Home";
import Kome from "./containers/Kome/Kome";

import clear_message from "./actions/message";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    createBrowserHistory().listen((location) => {
      dispatch(clear_message());
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/kome" component={Kome}></Route>
      </Switch>
    </Router>
  );
}

export default App;
