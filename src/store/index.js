import {createStore} from "redux";

function counterReducer(currState={count: 0}, action) {
  let state = currState;

  if(action.type=='INCREMENT'){
    state = {count: currState.count+1}  
  }
  
  else if(action.type=='DECREMENT'){
    state = {count: currState.count-1}  
  }
  return state;
}

const counterStore = createStore(counterReducer);

export default counterStore;