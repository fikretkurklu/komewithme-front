import axios from "axios";
import authHeader from "./auth-header";
import config from "../config";

const API_URL = config.apiGateway.URL + "api/kome/";

const add_kome = (name, description) => {
  return axios.post(
    API_URL + "add",
    {
      id: 0,
      name,
      description,
    },
    { headers: authHeader() }
  );
};

const update_kome = (id, name, description) => {
  return axios.post(
    API_URL + "update",
    {
      id,
      name,
      description,
    },
    { headers: authHeader() }
  );
};

const get_all_kome = () => {
  return axios.get(API_URL + "getAll", { headers: authHeader() });
};

const get_my_kome = () => {
  return axios.get(API_URL + "getMyKome", { headers: authHeader() });
};

const delete_kome = (id) => {
  return axios.post(API_URL + "delete", { id }, { headers: authHeader() });
};

const participate_kome = (komeId) => {
  return axios.post(
    API_URL + "participate",
    {
      id: 0,
      komeId,
    },
    { headers: authHeader() }
  );
};

export default {
  add_kome,
  get_all_kome,
  get_my_kome,
  delete_kome,
  update_kome,
  participate_kome,
};
