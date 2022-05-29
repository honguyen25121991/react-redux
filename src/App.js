import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  multiplicationCounter,
} from "./action/counter.action";
import CountNumber from "./components";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with React and Hoi Dan IT!</div>
        {/* <CountNumber /> */}
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
        <button onClick={() => props.multiplicationCounter()}>
          Multiplication Count
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    multiplicationCounter: () => dispatch(multiplicationCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
