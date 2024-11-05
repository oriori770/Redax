import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/Store";
import { increment, decrement } from "../Store/features/counter/counterSlice";
const Counter = () => {
  // useSelector מאפשר לנו לקרוא מה-state
  const count = useSelector((state: RootState) => state.counter.count);
  // useDispatch מאפשר לנו לשלוח actions

  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};
export default Counter;
