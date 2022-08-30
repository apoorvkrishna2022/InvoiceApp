import React, { createContext, useReducer } from "react";
import { getAllItems, addItems } from "../Network";
import { itemsDataTransform } from "../utils";

export const ItemsContext = createContext();

export const ItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      addItems(action.payload);
      getAllItems().then((response) => {
        state.data = itemsDataTransform(response.data);
        state.rows = response.data["total_rows"];
      });

      return state;
  }
};

const initialState = {
  data: [],
  rows: 0,
};

getAllItems().then((response) => {
  initialState.data = itemsDataTransform(response.data);
  initialState.rows = response.data["total_rows"];
});

export const ItemsProvider = (props) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  return (
    <ItemsContext.Provider
      value={{
        ItemsData: state.data,
        ItemsRows: state.rows,
        dispatch,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
