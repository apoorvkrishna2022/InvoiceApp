import React, { useState, useEffect } from "react";

import BasicTemplet from "../BasicTemplet/BasicTemplet.js";
import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddInvoice from "./AddInvoice/AddInvoice.js";
import { invoiceTableField } from "../../globalVariables.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoiceData } from "../../Redux/InvoiceSlice.js";
import { Pagination } from "../../Pagination/Pagination.js";

const Invoice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const invoice = useSelector((state) => state.invoice);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, [currentPage]);

  console.log("invoices list", invoice.invoices);
  const [addInvoice, setAddInvoice] = useState(false);

  const clickAdd = (e) => {
    setAddInvoice(true);
  };
  const clickClose = (e) => {
    setAddInvoice(false);
  };
  let totalPage = Math.ceil(invoice.invoices.length / 10);
  let lower=(currentPage-1)*10;
  let upper=Math.min(currentPage*10, invoice.invoices.length)

  return (
    <>
      <BasicTemplet
        title={"Invoices"}
        btn={<Button button_name={"+ ADD Invoice"} onClick={clickAdd} />}
      >
        <List
          data={invoice.invoices.slice(lower, upper)}
          field={invoiceTableField}
        />
      </BasicTemplet>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />

      {addInvoice ? <AddInvoice onClose={clickClose} /> : null}
    </>
  );
};
export default Invoice;
