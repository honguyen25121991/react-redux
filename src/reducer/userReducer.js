import {
  FETCH_REQUEST_USER,
  FETCH_SUCCESS_USER,
  FETCH_ERROR_USER,
} from "../action/counter.types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST_USER:
      console.log("FETCH_REQUEST_USER", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_SUCCESS_USER:
      console.log("FETCH_SUCCESS_USER", action);
      return {
        ...state,
        listUsers: action.dataUsers,
        isLoading: false,
        isError: false,
      };
    case FETCH_ERROR_USER:
      console.log("FETCH_ERROR_USER", action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default userReducer;
