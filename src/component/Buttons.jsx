import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";

function Buttons() {

  let input = useRef();
  const dispatch = useDispatch();

  function handleIncrement() { 
    dispatch(counterAction.increment());
  }

  function handleDecrement() {
    dispatch(counterAction.decrement());
  }

  function handleAdd() {
    
    dispatch(counterAction.add({
      num: Number(input.current.value)
    }));
    input.current.value = ""
  }

  function handleSubtract() {
    dispatch(counterAction.subtract({
      num: Number(input.current.value)
    }));
    input.current.value = ""

  }


  return (
    <div>
      <button type="button" className="btn btn-success btn-lg px-4 gap-3 controls" onClick={handleIncrement}>Increment</button>
      <button type="button" className="btn btn-danger btn-lg px-4 controls" onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
        <input type="number" className="form-control controls" placeholder="Enter you number" ref={input}/>
        <button type="button" className="btn btn-success btn-lg px-4 controls" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-danger btn-lg px-4 controls" onClick={handleSubtract}>Subtract</button>
    </div>
  )
}

export default Buttons;