import axios from "axios";

const url = "http://localhost:3001/";

export const get = async () => {
  const rests = await axios.get(url);
  return rests;
};
