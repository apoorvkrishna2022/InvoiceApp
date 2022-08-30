import React, { useState } from "react";
import "./App.css"


import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";

const App = ()=>{
  const [userLogin, setUserLogin]=useState(true);
  const [userName, setUserName]=useState();
 
  return userLogin ? (
    <>
      <Provider store={Store}>
        <HomePage />
      </Provider>
    </>
  ) : (
    <Login
      userLogin={userLogin}
      setUserLogin={setUserLogin}
      userName={userName}
      setUserName={setUserName}
    />
  );
}



export default App;
