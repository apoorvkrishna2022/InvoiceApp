
import React from "react";

const InvoiceForm=({addInvoice, setTrigger})=>{
    const handleClose=()=>{
        setTrigger(false);
    }
    return (addInvoice?
        <div className="InvoiceForm-container">
            <h1>hey</h1>
            <button type="button" onClick={handleClose}>Primary</button>
        </div>:""
    );
}
export default InvoiceForm;