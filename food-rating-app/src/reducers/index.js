import { combineReducers } from "redux";

const submitLocationReducer = (location = null, action) => {
  if (action.type === "SUBMIT_LOCATION") {
    return action.payload;
  }
  return location;
};

const fetchRestsReducer = (response = null, action) => {
  if (action.type === "FETCH_RESTS") {
    return action.payload;
  }
  return response;
};

export default combineReducers({
  location: submitLocationReducer,
  rests: fetchRestsReducer,
});
