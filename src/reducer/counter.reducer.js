import { INCREMENT, DECREMENT, MULTIPLICATION } from "../action/counter.types";

const INITIAL_STATE = {
  count: 0,
  name: "Eric",
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("run INCREMENT");
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      console.log("run DECREMENT");

      return {
        ...state,
        count: state.count - 1,
      };
    case MULTIPLICATION:
      return {
        ...state,
        count: state.count * 2,
      };

    default:
      return state;
  }
};

export default counterReducer;
