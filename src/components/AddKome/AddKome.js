import { useState, useEffect } from "react";
import {
  Header,
  Form,
  Segment,
  Grid,
  TextArea,
  Button,
  Message,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { CLEAR } from "../../actions/types";

import { add_kome } from "../../actions/kome";

const AddKome = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.message);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({ type: CLEAR });
  }, [dispatch]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddKome = async (e) => {
    setLoading(true);

    dispatch(add_kome(name, description))
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
    <Button onClick={handleAddKome} color="orange" fluid size="large">
      Add
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
    <div>
      <Header icon textAlign="center" as="h3">
        Add Kome
      </Header>
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large" error>
            {successMessage}
            {errorMessage}
            <Segment>
              <Form.Input
                fluid
                icon="font"
                iconPosition="left"
                placeholder="Kome name"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />

              <TextArea
                onChange={handleDescription}
                value={description}
                placeholder="Kome description"
              />
              <br />
              <br />
              {button}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AddKome;
