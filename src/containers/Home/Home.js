import { useState } from "react";
import { Header } from "semantic-ui-react";

import Layout from "../Layout/Layout";
import AllKome from "../../components/AllKome/AllKome";
import ViewKome from "../../components/ViewKome/ViewKome";

const Home = () => {
  const [currentKome, setCurrentKome] = useState(null);

  const viewKome = currentKome ? <ViewKome kome={currentKome} /> : null;

  return (
    <Layout>
      <Header textAlign="center" as="h1">
        Home Page
      </Header>

      <AllKome updateCurrentKome={setCurrentKome} />

      {viewKome}
    </Layout>
  );
};

export default Home;
