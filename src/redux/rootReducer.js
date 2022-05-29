import { combineReducers } from "redux";

import counterReducer from "../reducer/counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
