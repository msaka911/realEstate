import { createSlice } from '@reduxjs/toolkit';


const stateSlice = createSlice({
  name: 'loggedin',
  initialState: {
      loggedin:false,
      token:"",
      count:0,
      items:null,
      smallScreen:window.matchMedia("(min-width: 726px)").matches
  },
  reducers: {
    setState(state,action) {
      state.loggedin = action.payload;
    },
    setToken(state,action){
      state.token = action.payload;
    },
    increament(state){
      state.count++
    },
    reset(state){
      state.count=0
    },
    setItems(state,action){
      state.items=action.payload
    },
    setSmallScreen(state,action){
      state.smallScreen=action.payload
    }
  },
});

export const stateActions = stateSlice.actions;

export default stateSlice.reducer;