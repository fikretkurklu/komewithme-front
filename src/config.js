const dev = {
  apiGateway: {
    URL: "http://localhost:8080/",
  },
};

const prod = {
  apiGateway: {
    URL: "https://komewithme-back.herokuapp.com/",
  },
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  ...config,
};
