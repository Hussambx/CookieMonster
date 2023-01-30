import React from "react";
export default function Boxlayout(props){
    //This is called when one of the cookies found within the box layout are selected, we take the target.name to track what index it is stored in within the array
    //This is then passed to the remove cookie function found in app.jsx  
    function removecookie(e){
        props.onClick(e.target.name)
    }
    
    var cloneofarray = props.data;

    //Conditonal Rendering+ Conditional Statements to adjust dimensions of objects:
    return(
        <>
        <div id="boxlayout" style={{width:props.size==1?'10vmax':props.size==12?'38vmax':props.size==6?'20vmax':'25vmax',height:props.size<=4?'8vmax':'12vmax'}} > 
        {cloneofarray.length>=2 && <img src={props.data[1].img} onClick={removecookie} name={props.data[1].index} style={{width:props.size==1?'8vmax':'6.4vmax',height:props.size==1?'8vmax':'6.4vmax'}}></img>}
        {props.size>=4 && cloneofarray.length>=3 && <img src={props.data[2].img} onClick={removecookie} name={props.data[2].index}></img>}
        {props.size>=4 && cloneofarray.length>=4 && <img src={props.data[3].img} onClick={removecookie} name={props.data[3].index}></img>}
        {props.size>=4 && cloneofarray.length>=5 && <img src={props.data[4].img} onClick={removecookie} name={props.data[4].index}></img>}
        {props.size>=6 && cloneofarray.length>=6 && <img src={props.data[5].img} onClick={removecookie} name={props.data[5].index}></img>}
        {props.size>=6 && cloneofarray.length>=7 && <img src={props.data[6].img} onClick={removecookie} name={props.data[6].index}></img>}
        {props.size>=12 && cloneofarray.length>=8 && <img src={props.data[7].img} onClick={removecookie} name={props.data[7].index}></img>}
        {props.size>=12 && cloneofarray.length>=9 && <img src={props.data[8].img} onClick={removecookie} name={props.data[8].index}></img>}
        {props.size>=12 && cloneofarray.length>=10 && <img src={props.data[9].img} onClick={removecookie} name={props.data[9].index}></img>}
        {props.size>=12 && cloneofarray.length>=11 && <img src={props.data[10].img} onClick={removecookie} name={props.data[10].index}></img>}
        {props.size>=12 && cloneofarray.length>=12 && <img src={props.data[11].img} onClick={removecookie} name={props.data[11].index}></img>}
        {props.size>=12 && cloneofarray.length>=13 && <img src={props.data[12].img} onClick={removecookie} name={props.data[12].index}></img>}
        </div>
        </>
    )
}