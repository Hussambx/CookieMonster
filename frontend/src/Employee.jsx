import React from "react";
import { useState, useEffect } from "react";
import Orderinfo from "./components/Orderinfo";
//This will be the main jsx file for the Employee facing frontend 

export default function Employee(){
    const [activeui, setUi] = useState(0);  //Keeps track of what type of data that should be showen, Complete/Incomplete or ALL orders 
    const[orderdata,setData] = useState([]); //Keeps track of all the order data fetched from the data base 
    const[apistring,setString] = useState("https://cookiemonster.fly.dev/NEW"); //API String used for Data 
    const[render,setRender] = useState(false); //Forces Re-Fetch of data 
    function changetype(e){
    
        if(e.target.name == 0){ //GETS ONLY NEW ORDERS 
            setString(prevstate=>"https://cookiemonster.fly.dev/NEW");
        }else if(e.target.name==1){ //GETS ONLY FINISHED ORDERS 
            setString(prevstate=>"https://cookiemonster.fly.dev/DONE");
        }else{  //GETS ALL ORDERS 
            setString(prevstate=>"https://cookiemonster.fly.dev/ALL");
        }
        setUi(prevstate=>e.target.name);
    }
    //This function is called when the complete order button is pressed, re-rendering the data 
    function rerender(){
        setRender(prevstate=>!prevstate);
    }

    React.useEffect(() => {
        async function getOrders() {  //Fetchs order data from data base
           
            const res = await fetch(apistring);
            const data = await res.json()
            setData(data);
        }
        getOrders()
    }, [activeui,render])
    
    console.log(orderdata);

    
    const orders = orderdata.map(orderx=>{
        return(
          <Orderinfo
            data = {orderx}
            rerender = {rerender}
          />
        )
      })


    return(
        <>
         <h2 style={{fontSize:"xx-large"}}>Filter Orders:</h2>
        <div className="orderinfo">
        <button onClick={changetype} name="0" style={{backgroundColor:activeui==0?"grey":"white"}}>New</button>
        <button onClick={changetype} name="1" style={{backgroundColor:activeui==1?"grey":"white"}}>Complete</button>
        <button onClick={changetype} name="2" style={{backgroundColor:activeui==2?"grey":"white"}}>All Orders</button>

        

        </div>
       <div className="orderlist" style={{flexDirection:activeui==0?'column':'column-reverse'}}>
        {orderdata.length==0&& <h2>No New Orders Found..</h2>}
       {orders}


       </div>
      
        
        
        </>

    )

}