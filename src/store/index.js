import { configureStore } from '@reduxjs/toolkit';

import stateReducer from './store';


const store = configureStore({
  reducer: stateReducer,
});

export default store;