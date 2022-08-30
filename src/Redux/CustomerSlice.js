import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataTransform } from "../utils";
import { addCustomer, getAllCustomer } from "../Network";
import { cusDataField } from "../globalVariables";





const initialState = {
  loading: false,
  users: [],
  rows:0,
  error: "",
};

export const fetchCustomerData = createAsyncThunk("fetchCustomerData", () => {
    return getAllCustomer();
});

export const setCustomerData = createAsyncThunk("setCustomerData", (payload) => {
  return addCustomer(payload);
});

const customerSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCustomerData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCustomerData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload["customer"]
        ? DataTransform(cusDataField, "customer", action.payload)
        : [];
      state.rows = action.payload["total_rows"]
        ? action.payload["total_rows"]
        : 0;
      state.error = "";
    });
    builder.addCase(fetchCustomerData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.rows = 0;
      state.error = action.error.message;
    });
    builder.addCase(setCustomerData.fulfilled, () => {});
  },
});

export default customerSlice.reducer;