import React from "react";
import Orderinfoext from "./Orderinfoext"; //This is a helper componeent to this function 
//This JSX element will show all the incoming orders, the prop elements are passed from employee.jsx 
//BELONGS TO EMPLOYEE.JSX
export default function Orderinfo (props){

    //This function is called when the order complete button is pressed 
    async function finishedorder(){
        const orderinfoupdate = {status:true}
        const response = await fetch('https://cookiemonster.fly.dev/'+props.data._id, {
          method: 'PATCH',
          body: JSON.stringify(orderinfoupdate),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
        if(!response.ok){
            console.log("ERROR HAPPENED");
        }
        if(response.ok){
            //Resets state values as data was sent to db
            console.log("We did it");
            props.rerender();
        }
    }

    //Counter components for the # of water, chocolate milk and reg milk 
    var water= 0;
    var cmilk = 0;
    var wmilk = 0;
  
 
    if(props.data.order.length>0){
        //This will loop through the order and find the total amount of each item of drinks, that way its displayed in a neater format 
        for(var i = 0; i<props.data.order.length; i++){
            for(var j =0; j<props.data.order[i].length;j++){
               
                if(props.data.order[i][j].name == "Water"){
                    water++;
                    console.log("Adasda");
                }else if (props.data.order[i][j].name=="Chocolate Milk"){
                    cmilk++
                }else if (props.data.order[i][j].name=="Milk"){
                    wmilk++
                }
            }
        }
    }


    
    //This will pass each single item from the order to Orderinfoext.jsx 
    const orderitems = props.data.order.map(orderitemsx=>{
        return(
          <Orderinfoext
            data = {orderitemsx}
          />
        )
      })


    return(
        <div className="testerx">
            <h2 style={{color:'blue'}}>#{props.data.ordernum}</h2>
        <div style={{display:'flex',justifyContent:'center',gap:'15px'}}>
    
      {orderitems}
      <div>
      {water>0 && <h2>Water x{water}</h2>}
      {wmilk>0 && <h2>Milk x{wmilk}</h2>}
      {cmilk>0 && <h2>Chocolate Milk x{cmilk}</h2>}


      </div>
      
        </div>
       { props.data.status==false &&<button className="updatestatus" onClick={finishedorder}>Complete Order</button>}
        
        
        
        </div>


    )
}