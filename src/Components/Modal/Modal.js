import React from "react";
import "./Modal.css"

const Modal=({children})=>{
    return (
        <>
            <div className="modal-background">
                {children}
            </div>
        </>
    );

}

export default Modal;

