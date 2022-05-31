import { combineReducers } from "redux";

import counterReducer from "../reducer/counter.reducer";
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
