import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./CustomerSlice.js"
import itemReducer from "./ItemSlice.js";
import invoiceReducer from "./InvoiceSlice.js";

const Store = configureStore({
  reducer: {
    customer: customerReducer,
    item: itemReducer,
    invoice: invoiceReducer,
  },
});

export default Store;