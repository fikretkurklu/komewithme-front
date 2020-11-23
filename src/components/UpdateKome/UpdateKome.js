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

import { update_kome } from "../../actions/kome";

const UpdateKome = (props) => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.message);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({ type: CLEAR });
    setName(props.kome.name);
    setDescription(props.kome.description);
    setId(props.kome.id);
  }, [dispatch, props]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdateKome = async (e) => {
    setLoading(true);

    dispatch(update_kome(id, name, description))
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
    <Button onClick={handleUpdateKome} color="orange" fluid size="large">
      Update
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
        Update Kome
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

export default UpdateKome;
