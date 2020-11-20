import AddKome from "../../components/AddKome/AddKome";
import ListKome from "../../components/ListKome/ListKome";

import Layout from "../Layout/Layout";
import { Header } from "semantic-ui-react";

const Kome = () => {
  return (
    <Layout>
      <Header icon textAlign="center" as="h1">
        Kome Page
      </Header>

      <AddKome />

      <ListKome />
    </Layout>
  );
};

export default Kome;
