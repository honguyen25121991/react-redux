import { INCREMENT, DECREMENT, MULTIPLICATION } from "../action/counter.types";

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
