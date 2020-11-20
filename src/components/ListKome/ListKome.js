import { Header, Segment, List } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { get_all_kome } from "../../actions/kome";

const ListKome = () => {
  const dispath = useDispatch();

  dispath(get_all_kome());

  const { komes } = useSelector((state) => state.kome);

  console.log(komes);

  const listKome = komes.map((kome) => {
    return (
      <>
        <List.Content>
          <List.Header>{kome.name}</List.Header>
          {kome.description}
        </List.Content>
      </>
    );
  });

  return (
    <>
      <Header icon textAlign="center" as="h3">
        All Kome
      </Header>

      <Segment>
        <List divided relaxed>
          <List.Item>{listKome}</List.Item>
        </List>
      </Segment>
    </>
  );
};

export default ListKome;
