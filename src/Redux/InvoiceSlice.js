
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InvoiceDataTransform } from "../utils";
import { addInvoice, getAllInvoice } from "../Network";
import { invoiceDataField } from "../globalVariables";

const initialState = {
  loading: false,
  invoices: [],
  error: "",
};

export const fetchInvoiceData = createAsyncThunk(
  "fetchInvoiceData",
  () => {
    return getAllInvoice();
  }
);

export const setInvoiceData = createAsyncThunk(
  "setInvoiceData",
  (payload) => {
    return addInvoice(payload);
  }
);

const inoviceSlice = createSlice({
  name: "invoice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchInvoiceData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInvoiceData.fulfilled, (state, action) => {
      state.loading = false;
      state.invoices = action.payload
        ? InvoiceDataTransform(invoiceDataField, action.payload)
        : [];
      
      state.error = "";
      console.log("state", state.invoices);
    });
    builder.addCase(fetchInvoiceData.rejected, (state, action) => {
      state.loading = false;
      state.invoices = [];

      state.error = action.error.message;
    });
    builder.addCase(setInvoiceData.fulfilled, () => {});
  },
});

export default inoviceSlice.reducer;
