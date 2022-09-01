import React from "react";
import InvoiceForm from "../../Forms/InvoiceForm.js"


const AddInvoice=({onClose})=>{
    return (
        <>
            <InvoiceForm onClose={onClose}/>
        </>
    );
}
export default AddInvoice;