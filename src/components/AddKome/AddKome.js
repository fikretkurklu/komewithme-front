import { useState } from "react";
import {
  Header,
  Form,
  Segment,
  Grid,
  TextArea,
  Button,
} from "semantic-ui-react";
import { useDispatch } from "react-redux";

import { add_kome } from "../../actions/kome";

const AddKome = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

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
        console.log("success");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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

  return (
    <div>
      <Header icon textAlign="center" as="h3">
        Add Kome
      </Header>
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
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
