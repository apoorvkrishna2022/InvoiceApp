import React, {useEffect, useState} from "react";
import BasicFormTemplet from '../Forms/BasicFormTemplet.js';
import axios from "axios";

const baseURL = "http://localhost:8080/v1/customer/add";


const AddCustomer=({addCustomer, setAddCustomer})=>{
    const [postData, setPost] = useState();
    
    // useEffect(()=>{
    //     alert(postData);
    //     console.log("Customer Info: ",postData);
    // },[postData]);
    const handleSubmit = (payload) => {
        // setPost(payload);
        axios.post(baseURL, payload) .then((response) => {
            // console.log("response: ",response.data);
            setPost(response.data);
        });
        alert("Customer has been Successfully Added.");
        
    };
   
    const validation=(value, field)=>{
        if(field=='name'){
            if(value.length==0) return true;
            return /^[a-zA-Z]+$/.test(value);
        }
        if(field=="phone_number"){
            
            if(value.length==0) return true;
            if(value.length!=10) return false;
            return /^\d+$/.test(value);
        }
        return true;
    }
    

    const fields = [
        {
          name: "name",
          type: "text",
          title: "Name",
          value:"",
          placeholder: "Please enter Customer Name"
        },
        {
          name: "phone_number",
          type: "text",
          title: "Phone",
          value:"",
          placeholder: "Please enter Phone Number"
        },
        {
          name: "email",
          type: "text",
          title: "Email",
          value:"",
          placeholder: "Please enter Email"
        }
      ];



    return (
        addCustomer?<BasicFormTemplet  onSubmit={handleSubmit}
                                    fields={fields}
                                    trigger={addCustomer} 
                                    setTrigger={setAddCustomer}
                                    title={"NEW CUSTOMER"}
                                    validation={validation}/>:""
    );
}

export default AddCustomer;