import {  configureStore } from '@reduxjs/toolkit';
import CartSlice from './Slice';
const store=configureStore({
  reducer:{
    CartSlice:CartSlice,
  }


})

export default store;