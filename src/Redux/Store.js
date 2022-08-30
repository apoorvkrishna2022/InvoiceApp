import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./CustomerSlice.js"
import itemReducer from "./ItemSlice.js";

const Store = configureStore({
  reducer: {
    customer: customerReducer,
    item: itemReducer,
  },
});

export default Store;