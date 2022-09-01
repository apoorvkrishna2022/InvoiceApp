import React from "react";
import BasicFormTemplet from "../Forms/BasicFormTemplet.js";

import Modal from "../Modal/Modal.js";
import {useDispatch } from "react-redux";
import { setCustomerData, fetchData } from "../../Redux/CustomerSlice.js";


const AddCustomer = ({ onClose }) => {
  const dispatch = useDispatch();
 
  const handleSubmit = (payload) => {
   dispatch(setCustomerData(payload));

   onClose();
   window.location = "/";
  };

  const validation = (value, field) => {
    if (field == "name") {
      if (value.length == 0) return true;
      return /^[a-zA-Z]+$/.test(value);
    }
    if (field == "phone_number") {
      if (value.length == 0) return true;
      if (value.length != 10) return false;
      return /^\d+$/.test(value);
    }
    return true;
  };

  const fields = [
    {
      name: "name",
      type: "text",
      title: "Name",
      value: "",
      placeholder: "Please enter Customer Name",
    },
    {
      name: "phone_number",
      type: "text",
      title: "Phone",
      value: "",
      placeholder: "Please enter Phone Number",
    },
    {
      name: "email",
      type: "text",
      title: "Email",
      value: "",
      placeholder: "Please enter Email",
    },
  ];

  return (
    <Modal>
      <BasicFormTemplet
        onSubmit={handleSubmit}
        fields={fields}
        title={"NEW CUSTOMER"}
        validation={validation}
        onClose={onClose}
      />
    </Modal>
  );
};

export default AddCustomer;
