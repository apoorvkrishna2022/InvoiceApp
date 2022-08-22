import React from "react";
import InvoiceForm from "../Forms/InvoiceForm.js"


const AddInvoice=({addInvoice, setTrigger})=>{
    return (
        <>
            <InvoiceForm addInvoice={addInvoice} setTrigger={setTrigger}/>
        </>
    );
}
export default AddInvoice;