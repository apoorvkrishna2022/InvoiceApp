import React, { useState, useEffect } from "react";
import BasicTemplet from "../BasicTemplet/BasicTemplet.js";
import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddCustomer from "./AddCustomer.js";
import { cusTableField } from "../../globalVariables.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerData } from "../../Redux/CustomerSlice.js";
import { Pagination } from "../../Pagination/Pagination.js";

const Customer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  useEffect(()=>{
    if (!customer.data.hasOwnProperty(currentPage)) {
      dispatch(fetchCustomerData(currentPage));
    }
    console.log("customer", currentPage, customer.data);
  });
  useEffect(() => {
    
    if (!customer.data.hasOwnProperty(currentPage)) {
      dispatch(fetchCustomerData(currentPage));
    }
    console.log("customer", currentPage , customer.data);
  }, [currentPage]);

  const [addCustomer, setAddCustomer] = useState(false);

  const clickAdd = (e) => {
    setAddCustomer(true);
  };
  const clickClose = (e) => {
    setAddCustomer(false);
  };
  let totalPage = Math.ceil(customer.rows / 10);
  console.log("total Page", totalPage);

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
          <List data={customer.data[currentPage]} field={cusTableField} />
        ) : null}
      </BasicTemplet>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />

      {addCustomer ? <AddCustomer onClose={clickClose} /> : ""}
    </>
  );
};
export default Customer;
