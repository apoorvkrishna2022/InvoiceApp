import React from "react";
import {noop} from '../../utils';
import "./Button.css"

const Button=({button_name, onClick, ...rest})=>{

    return (<button onClick={onClick} className=" button" {...rest}><span>{button_name}</span></button> );
}

Button.defaultProps = {
    type: 'button',
    onClick: noop, //replace with noop
};

export default Button;

