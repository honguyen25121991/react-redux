import { INCREMENT, DECREMENT, multiplication } from "../action/counter.types";

const INITIAL_STATE = {
  count: 1,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case multiplication:
      return {
        ...state,
        count: state.count * 2,
      };

    default:
      return state;
  }
};

export default reducer;
