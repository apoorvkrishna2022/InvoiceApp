import React, { createContext, useReducer } from "react";
import { getAllCustomer, addCustomer} from "../Network";
import { customerDataTransform } from "../utils";


export const CustomerContext = createContext();

export const CustomerReducer = async (state, action) => {
  
  switch (action.type) {
    case "ADD_CUSTOMER":
      await addCustomer(action.payload)
      const response = await getAllCustomer()
        state.data = customerDataTransform(response.data);
        state.rows = response.data["total_rows"];
      
      
      return state;
  }
};


const initialState = {
  data:[],
  rows:0,
};

getAllCustomer().then((response) => {
      initialState.data=customerDataTransform(response.data);
      initialState.rows=response.data["total_rows"];
    });



export const CustomerProvider = (props) => {
  
  const [state, dispatch] = useReducer(CustomerReducer, initialState);
  

  
  return (
    <CustomerContext.Provider
      value={{
        customerData: state.data,
        customerRows: state.rows,
        dispatch,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};


