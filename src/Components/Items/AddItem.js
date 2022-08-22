import React from "react";
import BasicFormTemplet from '../Forms/BasicFormTemplet.js';



const AddItem=({addItem, setAddItem})=>{
    const validation=(value, field)=>{
        if(field=='name'){
            if(value.length==0) return true;
            return /^[a-zA-Z]+$/.test(value);
        }
        if(field=="price"){
            if(value<0) return false;
        }
        return true;

    }
    const handleSubmit = (payload) => {
        console.log("Item Info: ", payload);
      };

    const fields = [
        {
          name: "name",
          type: "text",
          title: "Name",
          value:"",
          placeholder: "Please enter Item Name"
        },
        {
          name: "price",
          type: "number",
          title: "Price",
          value:"",
          placeholder: "Please enter Price"
        },
        {
          name: "discription",
          type: "textarea",
          title: "Discription",
          value:"",
          placeholder: "Please enter Discription of the Item"
        }
      ];



    return (
        addItem?<BasicFormTemplet   onSubmit={handleSubmit}
                                    fields={fields}
                                    trigger={addItem} 
                                    setTrigger={setAddItem}
                                    title={"NEW ITEM"}
                                    validation={validation}/>:""
    );
}

export default AddItem;