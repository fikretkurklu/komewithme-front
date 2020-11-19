import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Form,
  Grid,
  Header,
  Segment,
  Message,
  Button,
} from "semantic-ui-react";

import { register } from "../../actions/auth";

import classes from "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = async (e) => {
    dispatch(register(username, mail, password))
      .then(() => {
        console.log("successful");
      })
      .catch(() => {
        console.log("fuck");
      });
  };

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
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              type="text"
              name="mail"
              value={mail}
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

            <Button onClick={handleRegister} color="orange" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account ? <Link to="/login">Log in</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
