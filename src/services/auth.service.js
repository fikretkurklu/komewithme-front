import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/user/";

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

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default { register, login, logout };
