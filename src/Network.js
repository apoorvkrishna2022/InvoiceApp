import axios from "axios";
import React, { useState } from "react";

export const getAllCustomer = () => {
  const baseURL = "http://localhost:8080/v1/customer/customerList?page=1";
  const payload = {
    sort_key: "name",
    sort_value: "ASC",
  };
  return axios
    .post(baseURL, JSON.stringify(payload))
    .then((response) => response.data);
};

export const addCustomer = (payload) => {
  const baseURL = "http://localhost:8080/v1/customer/add";
  return axios.post(baseURL, payload).then((response)=>response.status);
};

export const getAllItems=()=>{
  const baseURL = "http://localhost:8080/v1/item/itemList?page=1";
  const payload=
  {
    sort_key:"item_name",
    sort_value:"ASC",
  };
  return axios
    .post(baseURL, JSON.stringify(payload))
    .then((response) => response.data);
};

export const addItem=(payload)=>{
  const baseURL = "http://localhost:8080/v1/item/add";
  return axios.post(baseURL, payload).then((response) => response.status);
}


