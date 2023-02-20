import React from "react";
import logo from '../assets/logo.png';
export default function NavBar(){
    return(
        <>
        <nav>
            <div id ="navleft">
            <img src={logo} id="logo"></img>
            <h2>Cookie Monster</h2>
            </div>
           <div id="navright">
           
        <button className="placeholder">Nutrition Values</button>
        <button className="placeholder">Loyality Points</button>
           </div>
       
        </nav>
        </>
    )
}