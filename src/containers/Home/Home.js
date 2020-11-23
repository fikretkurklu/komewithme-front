import { Header } from "semantic-ui-react";

import Layout from "../Layout/Layout";
import AllKome from "../../components/AllKome/AllKome";

const Home = (props) => {
  return (
    <Layout>
      <Header textAlign="center" as="h1">
        Home Page
      </Header>

      <AllKome />
    </Layout>
  );
};

export default Home;
