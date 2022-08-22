import React, { Children } from "react";

import '../BasicTemplet/BasicTemplet.css';



const BasicTemplet=({title, btn, children})=>{

    return (
        <div className="main-container">
            <div className="header">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="add-button">
                    {btn}
                </div>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    );

}

export default BasicTemplet;