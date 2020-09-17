import axios from "axios";
const url = "http://localhost:3001/";

export const submitLocation = (location) => {
  return {
    type: "SUBMIT_LOCATION",
    payload: location,
  };
};

export const fetchRests = () => async (dispatch) => {
  const response = await axios.get(url);

  dispatch({ type: "FETCH_RESTS", payload: response });
};

export const submitRating = (id, rating) => async (dispatch) => {
  dispatch({ type: "SUBMIT_RATING", payload: rating });
};
