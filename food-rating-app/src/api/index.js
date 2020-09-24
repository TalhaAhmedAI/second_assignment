import axios from "axios";

const url = "http://localhost:3001";

export const register = (user) => {
  const apiEndpoint = url + "/users";
  axios.post(apiEndpoint, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
};
