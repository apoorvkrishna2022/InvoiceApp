
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customerDataTransform } from "../utils";
import { addItem, getAllItems } from "../Network";
import { itemsDataField } from "../globalVariables";
import { DataTransform } from "../utils";

const initialState = {
  loading: false,
  items: [],
  rows: 0,
  error: "",
};

export const fetchItemData = createAsyncThunk("fetchItemData", () => {
  return getAllItems();
});

export const setItemData = createAsyncThunk("setItemData", (payload) => {
  return addItem(payload);
});

const itemSlice = createSlice({
  name: "item",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItemData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItemData.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload["item"]
        ? DataTransform(itemsDataField, "item", action.payload)
        : [];
      state.rows = action.payload["total_rows"]
        ? action.payload["total_rows"]
        : 0;
      state.error = "";
      
    });
    builder.addCase(fetchItemData.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.rows = 0;
      state.error = action.error.message;
    });
    builder.addCase(setItemData.fulfilled, () => {});
  },
});

export default itemSlice.reducer;
