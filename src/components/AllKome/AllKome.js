import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header, List, Segment, Button } from "semantic-ui-react";

import { get_all_kome } from "../../actions/kome";

const AllKome = (props) => {
  const dispatch = useDispatch();

  const { komes } = useSelector((state) => state.kome);

  useEffect(() => {
    dispatch(get_all_kome());
  }, [dispatch]);

  const handleView = (kome) => {
    props.updateCurrentKome(kome);
  };

  const listKome =
    komes.length > 0 ? (
      komes.map((kome) => {
        return (
          <List.Item key={kome.id}>
            <List.Content>
              <List.Header>
                {kome.name} by {kome.user.username}
              </List.Header>
              <List.Description>{kome.description}</List.Description>
              <List.Content floated="right">
                <Button
                  color="blue"
                  onClick={() => {
                    handleView(kome);
                  }}
                >
                  View
                </Button>
              </List.Content>
            </List.Content>
          </List.Item>
        );
      })
    ) : (
      <></>
    );

  return (
    <div>
      <Header icon textAlign="center" as="h3">
        Kome
      </Header>

      <Segment>
        <List divided relaxed size="big">
          {listKome}
        </List>
      </Segment>
    </div>
  );
};

export default AllKome;
