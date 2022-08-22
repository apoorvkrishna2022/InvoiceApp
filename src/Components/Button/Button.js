import React from "react";

import "./Button.css"

const Button=({button_name, onClick})=>{

    return (<button type="button" onClick={onClick}className=" button"><span>{button_name}</span></button> );
}

export default Button;

