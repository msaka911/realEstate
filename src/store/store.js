import { createSlice } from '@reduxjs/toolkit';


const stateSlice = createSlice({
  name: 'loggedin',
  initialState: {
      loggedin:false,
      token:""
  },
  reducers: {
    setState(state,action) {
      state.loggedin = action.payload;
    },
    setToken(state,action){
      state.token = action.payload;
    }
  },
});

export const stateActions = stateSlice.actions;

export default stateSlice.reducer;