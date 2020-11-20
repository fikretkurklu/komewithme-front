import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/kome/";

const add_kome = (name, description) => {
  return axios.post(
    API_URL + "add",
    {
      name,
      description,
    },
    { headers: authHeader() }
  );
};

const get_all_kome = () => {
  return axios.get(API_URL + "getAll", { headers: authHeader() });
};

export default { add_kome, get_all_kome };
