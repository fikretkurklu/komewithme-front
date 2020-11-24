import { Header, Button, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { participate_kome } from "../../actions/kome";

const ViewKome = (props) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const isDisplayButton = user
    ? user.username !== props.kome.user.username
    : false;

  let disable = user
    ? props.kome.participant.some((participant) => {
        return participant.username === user.username;
      })
    : true;

  let participateButton = isDisplayButton ? (
    <Button
      onClick={() => handleParticipate(props.kome.id)}
      color="orange"
      fluid
      size="large"
      disabled={disable}
    >
      Participate
    </Button>
  ) : null;

  participateButton = loading ? (
    <Button loading color="orange" fluid size="large"></Button>
  ) : (
    participateButton
  );

  const handleParticipate = (komeId) => {
    setLoading(true);
    dispatch(participate_kome(komeId))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  };

  return (
    <div>
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header textAlign="center" as="h3">
            {props.kome.name}
          </Header>
          <Header textAlign="center" as="h4">
            by {props.kome.user.username} | {props.kome.participant.length}{" "}
            participant
          </Header>

          {participateButton}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ViewKome;
