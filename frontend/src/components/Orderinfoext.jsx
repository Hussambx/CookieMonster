import React from "react";
import Boxlayout from "./Boxlayout";
export default function Orderinfoext(props){
    //BELONGS TO EMPLOYEE.JSX
   
    function empty(){}
    //This comp renders the cookie box component 
    return(

        <div style={{dispay:'flex',flexDirection:"column"}}>
        {props.data.length>1 && <Boxlayout 
        data = {props.data}
        onClick ={empty}
        size={props.data.length-1}
        incheckout={true}
        key={0}
        
        />}
        </div>

    )
}