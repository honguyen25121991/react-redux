import { INCREMENT, DECREMENT, multiplication } from "../action/counter.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const multiplicationCounter = () => {
  return {
    type: multiplication,
  };
};
