import React, {useState} from "react";

import BasicTemplet from '../BasicTemplet/BasicTemplet.js';
import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddInvoice from "./AddInvoice.js";


const invoiceData=[
    {date:"12/23/2022", customer:"apoorv", number:"INV00", padi_status:"Issued", amount:"23", amount_due:"12"},
    {date:"12/23/2022", customer:"apoorv", number:"INV00", padi_status:"Issued", amount:"23", amount_due:"12"},
    {date:"12/23/2022", customer:"apoorv", number:"INV00", padi_status:"Issued", amount:"23", amount_due:"12"},
    {date:"12/23/2022", customer:"apoorv", number:"INV00", padi_status:"Issued", amount:"23", amount_due:"12"},

    
];
const invoiceField=['DATE','CUSTOMER', 'NUMBER', 'PAID STATUS', 'AMOUNT', 'AMOUNT DUE'];

const Invoice =()=>{
    const [addInvoice, setAddInvoice]=useState(false);

    const clickAddInvoice=(e)=>{
        setAddInvoice(true);
    }
   

    return (
        <>
        
        <BasicTemplet title={"Invoices"} btn={<Button button_name={"+ ADD Invoice"} onClick={clickAddInvoice}/>}>
            <List data={invoiceData} field={invoiceField}/>
        </BasicTemplet>

        <AddInvoice addInvoice={addInvoice} setTrigger={setAddInvoice}/>

        
        </>
            
            
       
       
    );
        
}
export default Invoice;