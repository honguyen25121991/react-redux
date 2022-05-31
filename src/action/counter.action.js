import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  MULTIPLICATION,
  FETCH_REQUEST_USER,
  FETCH_SUCCESS_USER,
  FETCH_ERROR_USER,
} from "../action/counter.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: ["buy milk", "buy ban11"],
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const multiplicationCounter = () => {
  return {
    type: MULTIPLICATION,
  };
};
//start doing  finish
export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError());
      console.log(error);
    }
  };
};
export const fetchUserRequest = () => {
  return {
    type: FETCH_REQUEST_USER,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_SUCCESS_USER,
    dataUsers: data,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_ERROR_USER,
  };
};
