import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  multiplicationCounter,
} from "./action/counter.action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const newCount = useSelector((state) => state.counter.count);
  const name = useSelector((state) => {
    return state.counter.name;
  });
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseCounter());
  };
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    console.log("check data axios", data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with React and {name} </div>
        <div>Count: {newCount}</div>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
        <button onClick={() => dispatch(multiplicationCounter())}>
          Multiplication Count
        </button>
      </header>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//     name: state.counter.name,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//     multiplicationCounter: () => dispatch(multiplicationCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
