import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Form,
  Grid,
  Header,
  Segment,
  Message,
  Button,
} from "semantic-ui-react";

import { login } from "../../actions/auth";

import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleLogin = async (e) => {
    dispatch(login(username, password))
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        console.log("fuck");
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="orange" textAlign="center">
          <img class={classes.logo} alt="KomeWithMe logo" src="/kwmlogo.png" />
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />

            <Button onClick={handleLogin} color="orange" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          You don't have an account ? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
