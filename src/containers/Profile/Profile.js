import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, Icon } from "semantic-ui-react";

import Layout from "../Layout/Layout";

const Profile = (props) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Header icon textAlign="center" as="h1">
        <Icon name="user" circular />
        {user.username}
      </Header>
    </Layout>
  );
};

export default Profile;
