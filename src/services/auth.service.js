import axios from "axios";
import config from "../config";

const API_URL = config.apiGateway.URL + "api/auth/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    email,
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expirationTime", response.data.expirationTime);

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");

  return true;
};

export default { register, login, logout };
