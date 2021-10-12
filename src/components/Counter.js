import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterActions.increment());
  };

  const inc5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const decHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  console.log(show);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="">
        <button onClick={incHandler}>Inc</button>
        <button onClick={inc5Handler}>Inc +5</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   incHandler() {
//     this.props.increment();
//   }

//   decHandler() {
//     this.props.deccrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className="">
//           <button onClick={this.incHandler.bind(this)}>Inc</button>
//           <button onClick={this.decHandler.bind(this)}>Dec</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateTopProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   increment: () => dispatch({type : 'inc'})
//   deccrement: () => dispatch({type : 'dec'})
// }

// export default connect(mapStateTopProps,mapDispatchToProps)(Counter);

export default Counter;
