import React from "react";
import logo from '../assets/logo.png';
export default function NavBar(){
    return(
        <>
        <nav>
            <div id ="navleft">
            <img src={logo}></img>
            <h2>Cookie Monster</h2>
            </div>
           <div id="navright">
           
        <button class="placeholder">Nutrition Values</button>
        <button class="placeholder">Loyality Points</button>
           </div>
       
        </nav>
        </>
    )
}