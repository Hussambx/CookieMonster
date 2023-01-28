import React from "react";

export default function Cookiemenu(props){
    //Called when a cookie option is clicked 
    function cookieclicked(){
        props.onClick(props.name,props.img,props.id)
    }

    //This houses the actual cookie options that you can select, passed on as a prop
    return(
        <>
        <section>
        <img src={props.img} className="cookiepic" onClick={cookieclicked}></img>
        <h5>{props.name}</h5>
        <h6>{props.cal}</h6>
        </section>
        </>
    )
}