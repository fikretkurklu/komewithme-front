import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import AddKome from "../../components/AddKome/AddKome";
import ListKome from "../../components/ListKome/ListKome";

import Layout from "../Layout/Layout";
import { Header } from "semantic-ui-react";
import UpdateKome from "../../components/UpdateKome/UpdateKome";

const Kome = () => {
  const { user } = useSelector((state) => state.auth);

  const [updateKome, setUpdateKome] = useState(null);

  if (!user) {
    return <Redirect to="/login" />;
  }

  const update = updateKome ? <UpdateKome kome={updateKome} /> : <AddKome />;

  return (
    <Layout>
      <Header icon textAlign="center" as="h1">
        Kome Page
      </Header>

      {update}

      <ListKome updateKome={setUpdateKome} />
    </Layout>
  );
};

export default Kome;
