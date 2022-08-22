import React ,{useState, useEffect} from 'react';
import axios from 'axios';

import BasicTemplet from '../BasicTemplet/BasicTemplet.js';
import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddCustomer from "./AddCustomer.js";





let customerData=[
    {name:"apoorv", phone:"1234566", email:"apoorv$f", created_on:"12/23/2022"},
    {name:"apoorv", phone:"1234566", email:"apoorv$f", created_on:"12/23/2022"},
    {name:"apoorv", phone:"1234566", email:"apoorv$f", created_on:"12/23/2022"},
    {name:"apoorv", phone:"1234566", email:"apoorv$f", created_on:"12/23/2022"}
];
const customerField=['NAME', 'PHONE', 'EMAIL', 'CREATED ON'];


const Customer=()=>{
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
    const [customerData1, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
    }, []);
    
    
    const [addCustomer, setAddCustomer]=useState(false);
    const clickAdd=(e)=>{
        console.log()
        setAddCustomer(true);
    }
    return (
        <>
            <BasicTemplet title={"Customers"} btn={<Button onClick={clickAdd} button_name={"+ ADD Customer"}/>}>
                <List data={customerData} field={customerField}/>
            </BasicTemplet>

            <AddCustomer addCustomer={addCustomer}  setAddCustomer={setAddCustomer}/>


        </>
            
            );

}
export default Customer;