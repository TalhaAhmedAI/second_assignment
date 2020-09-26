import axios from "axios";

const url = "http://localhost:3001";

export const register = ({ name, email, password }) => {
  const apiEndpoint = url + "/users";
  axios.post(apiEndpoint, {
    name,
    email,
    password,
  });
};

export const login = ({ email, password }) => {
  const apiEndpoint = url + "/auth";
  axios.post(apiEndpoint, { email, password });
};
