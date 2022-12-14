import React,{useEffect} from "react";
import "./HomePage.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";


import SideBar from "../SideBar/SideBar";
import Customer from "../Customer/Customer";
import Items from "../Items/Items";
import Invoice from "../Invoice/Invoice";
import { Temp } from "../../Temp/Temp";



const HomePage=()=>{
    
    
    
    return (
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
                    <Route path="/temp" element={<Temp/>}/>
                    <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
                    </Routes>
                

                </div>
                
            </div>
        </BrowserRouter>
    );
}
export default HomePage;