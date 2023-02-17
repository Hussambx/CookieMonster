import React from "react";
import Boxlayout from "./Boxlayout";
import trash from '../assets/trash.png'
//Will accept prop component being each index of checkout state and display them here 
export default function Checkout(props){
    var a = 0
    if (props.list.length>1){
        a=1 
    }
    function pressed(num){}

    function actualone(){
        props.removeitem(props.list[0].rd)
    }
    return(
        <>
        <div className="itemlist" style={{height:props.list.length==2?'6.1vmax':props.list.length==5?'6.1vmax':props.list.length==7?'11.1vmax':props.list.length==13?'16.1vmax':'10.5vmax'}}>
       
        {props.list.length==1 && <img src={props.list[0].checkimg} className="checkouticon"></img>}
        {a==1 && <Boxlayout
        size={props.size}
        data={props.list}
        key={0}
        onClick={pressed}
        incheckout={true}
        
        />}
        <img src={trash} onClick={actualone} style={{height:'2vmax',width:'2vmax',marginTop:props.list.length==5 || props.list.length==2?'1.8vmax':props.list.length==7?'3vmax':props.list.length==13?'6.3vmax':'4vmax',marginLeft:props.list.length==1?'-6vmax':'0vmax'}}></img>
        <section className="area">
        <h4 className="editthis" style={{marginTop:props.list.length==5 || props.list.length==2?'0.3vmax':props.list.length==7?'3vmax':props.list.length==13?'6.3vmax':'4vmax'}}>${props.list[0].price}</h4>
        </section>
        




        </div>
        <div>



        </div>
        
        </>
    )
}