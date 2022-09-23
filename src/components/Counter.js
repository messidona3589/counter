const Counter = ({state, number, onIncrease, onDecrease}) => {
  return(
    <div>
      <h1 style={{color: state.color}}>{number}</h1>
      <button style={{background: state.subColor}} onClick={onIncrease}>+1</button>
      <button style={{background: state.subColor}} onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;