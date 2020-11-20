import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Profile from "./containers/Profile/Profile";
import Home from "./containers/Home/Home";
import Kome from "./containers/Kome/Kome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/kome" component={Kome}></Route>
      </Switch>
    </Router>
  );
}

export default App;
