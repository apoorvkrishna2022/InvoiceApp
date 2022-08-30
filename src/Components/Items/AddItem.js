import React from "react";
import BasicFormTemplet from '../Forms/BasicFormTemplet.js';
import Modal from "../Modal/Modal.js";

import { useSelector, useDispatch } from "react-redux";
import { setItemData, fetchData } from "../../Redux/ItemSlice.js";

const AddItem=({onClose})=>{
  const dispatch = useDispatch();

  const handleSubmit = (payload) => {
    console.log(payload);
    dispatch(setItemData(payload));
    onClose();
    window.location = "/items";
  };
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
    

    const fields = [
      {
        name: "Item_Name",
        type: "text",
        title: "Name",
        value: "",
        placeholder: "Please enter Item Name",
      },
      {
        name: "Price",
        type: "number",
        title: "Price",
        value: "",
        placeholder: "Please enter Price",
      },
      {
        name: "Item_Description",
        type: "textarea",
        title: "Discription",
        value: "",
        placeholder: "Please enter Discription of the Item",
      },
    ];



    return (
      <Modal>
        <BasicFormTemplet
          onSubmit={handleSubmit}
          fields={fields}
          title={"NEW Item"}
          validation={validation}
          onClose={onClose}
        />
    </Modal>
    );
}

export default AddItem;