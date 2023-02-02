import React from "react";
import { useState } from "react";
export default function Confirmselection(props){

    //This screen allows customer to adjust quanity, upgrade box and add the order to their bag 
    //Only rendered when the customer has either fully filled there cookie box or they are on the drink selection screen 

    //Counter Element keeps track of quantity
    const[counter,setCount] =useState(1);

    function addCount(){
        if(counter<12){
            setCount(prevstate=> counter+1)
        }  
    }
    function removeCount(){
        if(counter>1){
            setCount(prevstate=>counter-1)
        }
    }
    //Function is called when customer hits the add to bag option 
    function addtocart(){
        props.tocart(counter)
    }
    
    //Function is called when customer hits upgrade box option 
    function upgradebox(){
    props.upgrade()
    }


    return(
        <>
        <h5>Quantity </h5>
        <div className="counter">
        <button className="dot" onClick={removeCount} >-</button>
        <h5>{counter}</h5>
        <button className="dot" onClick={addCount}>+</button>
        </div>
        <div className="counter"> 
      {props.sizeofbox!=12 && props.uiscreen!=4 &&  <button className="addtocart" onClick={upgradebox}>UPGRADE BOX</button>}
        <button className="addtocart" onClick={addtocart}>ADD TO BAG</button>
        
        </div>
       
      
        </>
    )
}