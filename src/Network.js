import axios from "axios";
import React, { useState } from "react";

export const getAllCustomer = (currentPage) => {
  const baseURL = "http://localhost:8080/v1/customer/customerList?page="+currentPage;
  const payload = {
    sort_key: "name",
    sort_value: "ASC",
  };
  return axios
    .post(baseURL, JSON.stringify(payload))
    .then((response) => [response.data, currentPage]);
};

export const addCustomer = (payload) => {
  const baseURL = "http://localhost:8080/v1/customer/add";
  return axios.post(baseURL, payload).then((response)=>response.status);
};

export const getAllItems=(currentPage)=>{
  const baseURL = "http://localhost:8080/v1/item/itemList?page="+currentPage;
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

export const getAllInvoice=()=>{
  const baseURL = "http://localhost:8080/v1/invoice/list";
  return axios.get(baseURL).then((response)=>{
  console.log("network", response.data);
  return response.data
  });


}
export const addInvoice=(payload)=>{
  const baseURL = "http://localhost:8080/v1/invoice/create";
  return axios.post(baseURL, payload).then((response)=>response.status);

}


