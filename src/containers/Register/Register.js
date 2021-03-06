import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CLEAR } from "../../actions/types";

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

  const message = useSelector((state) => state.message);

  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch({ type: CLEAR });
  }, [dispatch]);

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
    setLoading(true);
    dispatch(register(username, mail, password))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const button = loading ? (
    <Button loading color="orange" fluid size="large"></Button>
  ) : (
    <Button onClick={handleRegister} color="orange" fluid size="large">
      Register
    </Button>
  );

  const successMessage = message.success ? (
    <Message
      positive
      header={message.success.name}
      content={message.success.message}
    />
  ) : null;

  const errorMessage = message.errors
    ? message.errors.map((error) => (
        <Message
          key={error.name}
          error
          header={error.name}
          content={error.message}
        />
      ))
    : null;

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="orange" textAlign="center">
          <img
            className={classes.logo}
            alt="KomeWithMe logo"
            src="/kwmlogo.png"
          />
        </Header>
        <Form size="large" error>
          {successMessage}
          {errorMessage}
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

            {button}
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
