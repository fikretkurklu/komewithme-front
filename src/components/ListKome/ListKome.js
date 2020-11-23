import { Header, Segment, List, Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { get_my_kome } from "../../actions/kome";
import { useEffect } from "react";

import { delete_kome } from "../../actions/kome";

const ListKome = (props) => {
  const dispath = useDispatch();

  const { myKomes } = useSelector((state) => state.kome);

  useEffect(() => {
    dispath(get_my_kome());
  }, [dispath]);

  const handleDelete = (id) => {
    dispath(delete_kome(id));
  };

  const handleUpdate = (id, name, description) => {
    props.updateKome({ id, name, description });

    console.log(myKomes);
  };

  const listKome =
    myKomes.length > 0 ? (
      myKomes.map((kome) => {
        return (
          <List.Item key={kome.id}>
            <List.Content>
              <List.Header>{kome.name}</List.Header>
              <List.Description>{kome.description}</List.Description>
            </List.Content>
            <List.Content floated="right">
              <Form>
                <Button
                  color="orange"
                  onClick={() =>
                    handleUpdate(kome.id, kome.name, kome.description)
                  }
                >
                  Update
                </Button>
                <Button color="red" onClick={() => handleDelete(kome.id)}>
                  Delete
                </Button>
              </Form>
            </List.Content>
          </List.Item>
        );
      })
    ) : (
      <></>
    );

  return (
    <>
      <Header icon textAlign="center" as="h3">
        My Kome
      </Header>

      <Segment>
        <List divided relaxed size="big">
          {listKome}
        </List>
      </Segment>
    </>
  );
};

export default ListKome;
