
import React, {useState} from "react";

import "../Forms/InvoiceForm.css";
import BasicTemplet from "../BasicTemplet/BasicTemplet";
import Button from "../Button/Button";
import ChooseCustomer from "../Invoice/AddInvoice/ChooseCustomer";
import ChooseItems from "../Invoice/AddInvoice/ChooseItems";





const InvoiceForm=({onClose})=>{
    
    const handleChooseCustomer=(e)=>{
        
    }

    const handleChooseItems=(e)=>{
        
    }
    const handleClose=()=>{
        onClose();
    }
    return (
        <>
            <div className="invoiceForm-container">
                <BasicTemplet title={"NEW INVOICE"} btn={<Button onClick={handleClose} button_name={"+ SAVE Invoice"}/>}>
                    <div className="invoiceForm-body">
                        <div className="invoiceForm-body-header">
                            <div className="invoiceForm-body-header-left">
                                    <textarea row="10" col="10" placeholder="Enter Customer Here"></textarea>
                                    <Button button_name={"Choose"} onClick={handleChooseCustomer}/>
                            </div>
                            <div className="invoiceForm-body-header-right">
                                <div className="invoiceForm-body-header-right-top">
                                    <div>
                                        <form>
                                            <label for="issuedAt">Issued At</label>
                                            <br/>
                                            <input type="date" id="issuedAt" name="issuedAt"/> 
                                        </form>

                                    </div>
                                    <div>
                                        <form>
                                            <label for="dueDate">Due Date</label>
                                            <br/>
                                            <input type="date" id="dueDate" name="dueDate"/> 
                                        </form>
                                    </div>


                                </div>
                                <div className="invoiceForm-body-header-right-bottom">
                                    <div>
                                        <form>
                                            <label for="invoiceNumber">Invoice Number</label>
                                            <br/>
                                            <input type="date" id="invoiceNumber" name="invoiceNumber"/> 
                                        </form>

                                    </div>
                                    <div>
                                        <form>
                                            <label for="refNumber">Ref Number</label>
                                            <br/>
                                            <input type="date" id="refNumber" name="refNumber"/> 
                                        </form>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="invoiceForm-body-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                    </tr>

                                </thead>
                                
                            </table>
                            <Button button_name={"ADD Items"} onClick={handleChooseItems}/>
                        </div>
                        <div className="invoiceForm-body-footer">
                            <div className="invoiceForm-body-footer-left">
                                <textarea col="10" row="4" placeholder="Note"></textarea>

                            </div>
                            <div className="invoiceForm-body-footer-right">

                            </div>

                        </div>

                    </div>
                </BasicTemplet>

                
                
                
            </div>

            {/* <ChooseCustomer setTrigger={setChooseCust}/>
            <ChooseItems {setChooseItems}/> */}
            
            
           
        
        </>
        
        
       
    );
}
export default InvoiceForm;