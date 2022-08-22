import React, {useState} from "react";

import BasicTemplet from '../BasicTemplet/BasicTemplet.js';

import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddItem from "./AddItem.js";

const itemData=[
    {name:"apoorv", discription:"12Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.34566", price:"apoorv$f", added_on:"12/23/2022"},
    {name:"apoorv", discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", price:"apoorv$f", added_on:"12/23/2022"},
    {name:"apoorv", discription:"1234566", price:"apoorv$f", added_on:"12/23/2022"},
    {name:"apoorv", discription:"1234566", price:"apoorv$f", added_on:"12/23/2022"}
    
];
const itemsField=['NAME', 'DISCRIPTION', 'PRICE',  'ADDED ON'];



const Items =()=>{
    const [addItem, setAddItem]=useState(false);

    const clickAdd=(e)=>{
        setAddItem(true);
        // <BasicFormTemplet trigger={addItem} setTrigger={setAddItem}/>
        
        
    }

    return (
        <>
            <BasicTemplet title={"Items"} btn={<Button onClick={clickAdd} button_name={"+ ADD Item"}/>}>
                <List data={itemData} field={itemsField}/>
            </BasicTemplet>

            <AddItem addItem={addItem} setAddItem={setAddItem}/>




            

        </>
       
       
    );
        
}

export default Items;