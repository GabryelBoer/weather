import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data/dataSlice";

const store = configureStore({
  reducer: {
    weather: dataSlice,
  },
})

export default store;