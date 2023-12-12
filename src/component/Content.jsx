import { useSelector } from "react-redux";

function Content() {
  const counter = useSelector(store => store.count)
  return (
    <p className="lead mb-4">Counter : {counter}</p>
  )
}

export default Content;