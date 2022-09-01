import React, {useState, useEffect} from "react";

import BasicTemplet from '../BasicTemplet/BasicTemplet.js';

import List from "../List/List.js";
import Button from "../Button/Button.js";
import AddItem from "./AddItem.js";

import { useSelector, useDispatch } from "react-redux";
import { fetchItemData } from "../../Redux/ItemSlice.js";
import { itemsTableField } from "../../globalVariables.js";
import { Pagination } from "../../Pagination/Pagination.js";

const Items =()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const item = useSelector((state) => state.item);
    console.log(item);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchItemData(1));
      
    }, [currentPage]);
    

    const [addItem, setAddItem]=useState(false);

    const clickAdd=(e)=>{
        setAddItem(true);
    }
    const clickClose = (e) => {
      setAddItem(false);
    };
    let totalPage = Math.ceil(item.rows / 10);

    return (
      <>
        <>
          <BasicTemplet
            title={"Items"}
            btn={<Button onClick={clickAdd} button_name={"+ ADD Items"} />}
          >
            {item.loading && <div>Loading...</div>}
            {!item.loading && item.error ? (
              <div>Error: {item.error}</div>
            ) : null}
            {!item.loading && item.items.length ? (
              <List data={item.items} field={itemsTableField} />
            ) : null}
          </BasicTemplet>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
          />

          {addItem ? <AddItem onClose={clickClose} /> : ""}
        </>
      </>
    );
        
}

export default Items;