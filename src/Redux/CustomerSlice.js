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
  data:{},
};

export const fetchCustomerData = createAsyncThunk("fetchCustomerData", (currentPage) => {
    return getAllCustomer(currentPage);
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
      // console.log("slice start");
      // console.log(typeof(action.payload));
      // console.log(action.payload);
      // console.log(action.payload[0]);
      // console.log(action.payload[1]);
      
      state.loading = false;
      state.users = action.payload[0]["customer"]
        ? DataTransform(cusDataField, "customer", action.payload[0])
        : [];
      state.rows = action.payload[0]["total_rows"]
        ? action.payload[0]["total_rows"]
        : 0;
      state.error = "";
      state.data[action.payload[1]]=action.payload[0]["customer"]
        ? DataTransform(cusDataField, "customer", action.payload[0])
        : [];
      // console.log("state users", state.users);
      // console.log("state data", state.data);
      // console.log("slice end");
       
    });
    builder.addCase(fetchCustomerData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.rows = 0;
      state.error = action.error.message;
    });
    builder.addCase(setCustomerData.fulfilled, (state) => {
      state.loading= false;
      state.users= [];
      state.rows=0;
      state.error= "";
      state.data={};
    });
  },
});

export default customerSlice.reducer;