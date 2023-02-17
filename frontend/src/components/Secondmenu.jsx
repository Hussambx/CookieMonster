import React from "react";
export default function Secondmenu(props){
    //Function is called when one of the box sizes are selected, this info is then passed back to app.jsx
    //This info is taken into consideration within Boxlayout.jsx  
    function boxclicked(){
        if (props.checkimg!=null){
            props.onClick(props.id,props.name,props.price,props.img,props.checkimg)
        }else{
            props.onClick(props.id,props.name,props.price,props.img)
        }
       
    }


    return(
        
        <>
            <section>
            <img src={props.img} onClick={boxclicked}></img>
            <h5>{props.name}</h5>
            <h6>{props.desc}</h6>
            <h5>${props.price}</h5>
            </section>
           
        </>
    )
}