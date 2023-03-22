import React from "react";

//This is helper function for analytics, 
export default function AnalyticsHelper(props){

    //Takes the props components and renders them accordingly 

    return(<>
<section>
<img src={props.img} className='cookiepic'></img>
<h2>{props.data[props.name]}</h2>
</section>
   
    
    
    
    
    </>)
}