import { useDispatch } from "react-redux";



function Buttons() {

  const dispatch = useDispatch();

  function handleIncrement() {
    const action = {
      type: 'INCREMENT'
    }

    dispatch(action);
  }

  function handleDecrement() {
    const action = {
      type: 'DECREMENT'
    }

    dispatch(action);
  }


  return (
    <>
      <button type="button" className="btn btn-success btn-lg px-4 gap-3" onClick={handleIncrement}>Add</button>
      <button type="button" className="btn btn-danger btn-lg px-4" onClick={handleDecrement}>Minus</button>
    </>
  )
}

export default Buttons;