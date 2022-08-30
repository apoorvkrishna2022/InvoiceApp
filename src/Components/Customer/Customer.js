import React, { useState, useContext, useEffect } from "react";
import BasicTemplet from "../BasicTemplet/BasicTemplet.js";
import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddCustomer from "./AddCustomer.js";
// import { CustomerContext } from "../../Context/CustomerContext.js";
import { cusTableField } from "../../globalVariables.js";

import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerData } from "../../Redux/CustomerSlice.js";



const Customer = () => {

  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomerData());
  }, []);
  
  
  const [addCustomer, setAddCustomer] = useState(false);
 
  const clickAdd = (e) => {
    setAddCustomer(true);
  };
  const clickClose=(e)=>{
    setAddCustomer(false);
  };
 
  return (
    <>
      <BasicTemplet
        title={"Customers"}
        btn={<Button onClick={clickAdd} button_name={"+ ADD Customer"} />}
      >
        {customer.loading && <div>Loading...</div>}
        {!customer.loading && customer.error ? (
          <div>Error: {customer.error}</div>
        ) : null}
        {!customer.loading && customer.users.length ? (
          <List data={customer.users} field={cusTableField} />
        ) : null}
      </BasicTemplet>

      {addCustomer ? <AddCustomer onClose={clickClose} /> : ""}
    </>
  ); 
};
export default Customer;
