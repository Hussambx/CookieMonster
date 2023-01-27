import React from "react";
import onecookie from '../assets/1cookiegoodxt.png'
import fourcookie from '../assets/4cookiegoodxt.png'
import sixcookie from '../assets/6cookiegoodxt.png'
import twelvecookie from '../assets/12cookiegoodxt.png'
export default function Secondmenu(props){
    return(
        <>
            <section>
            <img src={props.img}></img>
            <h5>{props.name}</h5>
            <h6>{props.desc}</h6>
            <h5>{props.price}</h5>
            </section>
           
        </>
    )
}