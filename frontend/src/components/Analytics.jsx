import React from "react";
import AnalyticsHelper from "./AnalyticsHelper";
import cookieboxsizes from "../data/cookieboxsizes";
import cookieoptions from "../data/cookieoptions";
import drinkoptions from "../data/drinkoptions";
//This belongs to the Employeee.jsx (Emplyoee Facing Frontend )
//This will break down all the analytics from the orders
//This includes the most popular type of cookies, avg price etc
export default function Analytics(props){

//Price keeps track of the avg price of each order, and the map keeps count of each type of item and there given totals 
var price = 0;
var map ={};
//Note: This can be implemented into the backend, more optimized when dealing with tons of data. In this case it will be implemnted locally instead to save on backend useage 


//Will loop throughout all the data and count the # of each item, and the price per order 
for(var i =0; i<props.data.length;i++){
    for(var j =0; j<props.data[i].order.length;j++){
       for(var k=0; k<props.data[i].order[j].length;k++){
        //Checks to see if there is a already a key value within the hashmap already created for that given name 
       //In the case that there is simply add 1 to the existing value 
        //If there isn't create one and set the value to one 
        map[props.data[i].order[j][k].name]!=null? map[props.data[i].order[j][k].name] = map[props.data[i].order[j][k].name] + 1: map[props.data[i].order[j][k].name] =  1; 
        if(k==0){ //Adds up the price of each order, this will be averaged out later on 
            price = price + props.data[i].order[j][k].price;
        }
       }
    }
}
//Once this loop is completed the map value will have the total item count for everything 
price = price/props.data.length; //Divides total cost of all orders by the amount of orders giving you the avg cost per order 
price = Math.round(price*10)/10; //Rounds to one decimal point 


//Props compo, where the cookie info will be handled 
const cookieanalytics = cookieoptions.map(cookietypes=>{
    return(
      <AnalyticsHelper
        data = {map}
        img = {cookietypes.img}
        name = {cookietypes.name}
      />
      
    )
  })

  //Props comp, where the box info will be handled 
  const boxanalytics = cookieboxsizes.map(boxtypes=>{
    return(
      <AnalyticsHelper
        data = {map}
        img = {boxtypes.img}
        name = {boxtypes.name}
      />
      
    )
  }) 




  //Props comp, where the drinks info will be handled 
  const drinkanalytics = drinkoptions.map(drinktypes=>{
    return(
      <AnalyticsHelper
        data = {map}
        img = {drinktypes.img}
        name = {drinktypes.name}
      />
      
    )
  })




    return(
        <>
        <h2>Total Orders:</h2>
        <h2>{props.data.length}</h2>
        <h2>Average Price Per Order:</h2>
        <h2>${price}</h2>
        <h2>Cookies:</h2>
       <div style={{display:'flex',justifyContent:'center'}}>
        {cookieanalytics}
       </div>
       <h2>Boxs:</h2>
        <div style={{display:'flex',justifyContent:'center'}}>
        {boxanalytics}
        </div>
       <h2>Drinks:</h2>
        <div style={{display:'flex',justifyContent:'center'}}>
        {drinkanalytics}
        </div>
        

        
        
        
        
        </>
    )
}