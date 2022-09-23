import { useCallback, useContext} from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import Counter from "../components/Counter";
import ColorContext from "../contexts/color";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const {state} = useContext(ColorContext);

  const {number} = useSelector(({counter}) => ({
    number: counter.number
  }));
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return(
    <Counter state={state} number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;