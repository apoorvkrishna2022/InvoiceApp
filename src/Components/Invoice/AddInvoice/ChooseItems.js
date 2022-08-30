
import React from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";

const ChoseItems=({data, chooseItems, setTrigger})=>{
    const handleCancle=()=>{
        setTrigger({
            ...chooseItems,
            status:false,
        })
    }
    return (chooseItems.status?
        <>
            <Modal>
                
                <p>Choose Items</p>
                <Button onClick={handleCancle} button_name={"Close"}/>
            </Modal>
        </>:""
    );
}

export default ChoseItems;