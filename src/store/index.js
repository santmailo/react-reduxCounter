import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter", 
  initialState : {
    counterVal : 0
  }, 
  reducers: {
    increment: (state)=> {
      state.counterVal++;
    }, 
    
    decrement: (state) => {
      state.counterVal--      
    }, 
    
    add: (state, action) => {
      state.counterVal+=action.payload.num      
    },
    
    subtract: (state, action) => {
      state.counterVal-=action.payload.num
    },

  }

})



const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer
}});


export const counterAction = counterSlice.actions; 

export default counterStore;


// function counterReducer(currState = { count: 0 }, action) {
//   let state = currState;

//   if (action.type == 'INCREMENT') {
//     state = { count: currState.count + 1 }
//   }

//   else if (action.type == 'DECREMENT') {
//     state = { count: currState.count - 1 }
//   }

//   else if (action.type == "ADD") {
//     state = { count: currState.count + action.payload.num }
//   }

//   else if (action.type == "SUBTRACT") {
//     state = { count: currState.count - action.payload.num }
//   }
//   return state;
// }
