// redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"; // Import your reducers here.

const reducer = {
  counter: counterReducer, // Add your reducers here.
};

const store = configureStore({
  reducer,
});

export default store;
