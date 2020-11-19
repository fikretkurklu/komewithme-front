import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./containers/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Profile from "./containers/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
