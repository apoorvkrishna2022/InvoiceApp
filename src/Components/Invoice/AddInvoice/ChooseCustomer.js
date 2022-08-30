

import React from "react";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";


const ChooseCustomer=({data, chooseCust, setTrigger})=>{
    const handleCancle=()=>{
        setTrigger({
            ...chooseCust,
            status:false,
        })
    }
    return (chooseCust.status?

        <>  
            <Modal>
                <p>Choose Customer</p>
                <Button onClick={handleCancle} button_name={"Close"}/>
            </Modal>
        </>:""
    );
}


export default ChooseCustomer;