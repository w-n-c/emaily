import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get("/api/current_user")).data
  });

export const handleToken = token => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.post("/api/stripe", token)).data
  });

export const submitSurvey = (values, history) => async dispatch => {
  const payload = (await axios.post("/api/surveys", values)).data;

  history.push("/surveys");

  dispatch({
    type: FETCH_USER,
    payload
  });
};
