import React from "react";
import Boxlayout from "./Boxlayout";

//Will accept prop component being each index of checkout state and display them here 
export default function Checkout(props){
    var a = 0
    if (props.list.length>1){
        a=1 
    }

    function pressed(num){}
    console.log(a)
    return(
        <>
        <div className="itemlist" style={{height:props.list.length==2?'6.1vmax':props.list.length==5?'6.1vmax':props.list.length==7?'11.1vmax':'16.1vmax'}}>
       
        
        {a==1 && <Boxlayout
        size={props.size}
        data={props.list}
        key={0}
        onClick={pressed}
        incheckout={true}
        
        />}
        <section className="area">
        <h4 className="editthis" style={{marginTop:props.list.length<=5?'0.3vmax':props.list.length==7?'3vmax':'6.3vmax'}}>${props.list[0].price}</h4>
        </section>
        




        </div>
        <div>



        </div>
        
        </>
    )
}