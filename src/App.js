import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import "./App.css"
import SideBar from "./Components/SideBar/SideBar.js";
import Customer from "./Components/Customer/Customer.js";
import Items from "./Components/Items/Items.js";
import Invoice from "./Components/Invoice/Invoice.js";

const App = ()=>{
  return (
    <>
    
    <BrowserRouter>
      <div className="main-screen">
        <div className="left-screen">
            <SideBar/>
        </div>
        <div className="right-screen">
          <Routes>
                      <Route path="/" element={<Customer />}  />
                      <Route path="/items" element={<Items />}  />
                      <Route path="/invoice" element={<Invoice />}  />
                      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          </Routes>

        </div>
        
      </div>
      </BrowserRouter>
      
    </>
  );
}



export default App;
