import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
const SideBar=()=>{
    return (
      <>
        <div className="sidebar">
          <div className="sidebar-item">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              <span>Customer</span>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink
              to="/items"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              <span>Items</span>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink
              to="/invoice"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              <span>Invoice</span>
            </NavLink>
          </div>
          
          <div className="sidebar-item">
            <NavLink
              to="/temp"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              <span>Temp</span>
            </NavLink>
          </div>
        </div>
      </>
    );
}
export default SideBar;