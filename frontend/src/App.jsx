import { useState,useEffect, useTransition} from 'react'
import NavBar from './components/NavBar'
import Mainmenu from './components/Mainmenu'
import Secondmenu from './components/Secondmenu'
import cookieboxdata from './data/cookieboxsizes'
import cookietypes from './data/cookieoptions'
import Cookiemenu from './components/Cookiemenu'
import Boxlayout from './components/Boxlayout'
import Confirmselection from './components/Confirmselection'
import drinkoptions from './data/drinkoptions'
import Checkout from './components/Checkout'
//This JSX file will act as the main jsx file for the customer facing front end 
function App() {
  const [activeui, setUi] = useState(0);  //Zero =Main Menu, 1=Secondary Menu Cookies, 2 = Cookie Menu, 3=Seconday Menu Drinks, 4=Drink Screen, 5=Checkout Screen  
  const [boxsize,setSize] = useState(1);  //Keeps track of selected cookie box sizes, Options: 1,4,6,12
  const[cookielayout,setLayout] = useState([]); //Keeps track of the cookie box layout (Which cookies are in the given box + Order Of Them Left To Right),  this is only temp and once layout is confirmed list will be pushed to cart 
  const [drawerState, setDrawerState] = useState(false);   //This is used to force re-render Boxlayout element 
  const[cart,setCart] = useState([]); //This state keeps track of the persons cart(Items that they have addded to the order so far )
  const[drink,setDrink] = useState(''); //This state keeps track of the selected drink IMG 
  const [subtotal,setSubtotal] = useState(0);//This state keeps track of the subtotal of the given order 
  const[ordernum,setNumber] = useState(Math.round(Math.random(0,100)*200)) //This state tracks the customers order number 
  const delay = ms => new Promise(res => setTimeout(res, ms));; //Adds a delay 
  var tempclone;
  var tempclone2
  //Keeps track of what UI element should be displayed 
  function changeview(num){
    setUi(prevstate=>num)
   
    //num==0?setUi(prevstate=>1):setUi(prevstate=>5)
   // num==1?console.log(secmenu):console.log(secmenu)
  }
  
  //Keeps track of box size that is selected, and changes ui to cookie menu 
  function cookieboxsize(num,name,price,img){
    setUi(prevstate=>2)
    setSize(prevstate=>num)
    var a= [{name:name,price:price,index:0,quantity:1,rd:Math.random()}] //Sets the name of the box + price 
    setLayout(prevstate=>a); 
  }
  
  //Is Called when a cookie flavor is selected, adds the given cookie to the box 
  function pickedcookie(name,img,id){

    if(boxsize-cookielayout.length+1>0){
      tempclone=cookielayout;
      //This creates the name, img and index of the object within the array this index value is then used when it comes to deleting the specfic item 
      var c= {name:name,img:img,index:tempclone.length} 
      tempclone.push(c)
     setLayout(prevstate=>tempclone); //Updates cookielayout state 
     setDrawerState(!drawerState); //Force Rerender 
    }

  }

//This function removes the given cookie from the box
//The index of the given item that needs to be removed is passed and will be sliced out of the array 
  function removecookie(index){

    //This will filter through the array and remove the index of the given cookie
    setLayout((prevstate)=>
    prevstate.filter((cookiex)=>cookiex.index!=index)
    );
    setDrawerState(!drawerState); //Force Rerender 
    }

    //This function is called when a customer has confirmed there selection, the selection is then added to the customers cart 
    function addtocart(quantityx){
      //Update the quanity field to the given quanity by the end of the counter, will then push cookielayout state into cart state
      if(activeui==2 || activeui==4){
        tempclone = cookielayout
        tempclone[0].quantity = quantityx
        setLayout(prevstate=>tempclone)
        tempclone2 = cart;
        for(var x=0; x<quantityx; x++){
          tempclone2.push(tempclone)
        }
        
        setCart(prevstate=>tempclone2)
        setLayout(prevstate=>[])
        setUi(prevstate=>0)
      }
    }

    //This function is called when a customer has hit the upgrade box option, this function only applies for cookies not DRINKS
    function upgradebox(){
      //Changes box size from 1->4 , 4->6, 6->12
      boxsize==1?setSize(prevstate=>4):boxsize==4?setSize(prevstate=>6):setSize(prevstate=>12)
    }

    //Function called when a drink is selected
    //1 = water, 2=cho milk, 3 = milk 
    function pickedDrink(id,name,price,img,checkimg){
      var a= [{name:name,price:price,index:0,quantity:1,img:img,rd:Math.random(),checkimg:checkimg}] //Sets the name of the drink 
    setLayout(prevstate=>a); 
    setDrink(prevstate=>img)
    setUi(prevstate=>4)
      
    }

  //Props Compo for the cookie box types (sizes)
  const cookiebox =cookieboxdata.map(cookieboxdata=>{
    return(
      <Secondmenu
      name ={cookieboxdata.name}
      desc = {cookieboxdata.desc}
      price = {cookieboxdata.price}
      img = {cookieboxdata.img}
      id ={cookieboxdata.id}
      key = {cookieboxdata.id}
      onClick = {cookieboxsize}
      />
    )
  })

  //Props Compo for the cookie options (Flavors)
  const cookieoptions = cookietypes.map(cookietypes=>{
    return(
      <Cookiemenu
      name = {cookietypes.name}
      id ={cookietypes.id}
      img = {cookietypes.img}
      cal = {cookietypes.cal}
      key={cookietypes.id}
      onClick={pickedcookie}
      />
    )

  })

  //Props compo for the drinks options 
  const drinkmenu =drinkoptions.map(drinkoptions=>{
    return(
      <Secondmenu
      name ={drinkoptions.name}
      desc = {drinkoptions.desc}
      price = {drinkoptions.price}
      img = {drinkoptions.img}
      checkimg={drinkoptions.checkimg}
      id ={drinkoptions.id}
      key = {drinkoptions.id}
      onClick = {pickedDrink}
      />
    )
  })

  //Props component for checkout screen 
  const checkoutlist = cart.map(cartx=>{
    return(
      <Checkout
      list ={cartx}
      key={0}
      size={cartx.length-1}
      removeitem={removefromcart}
      />
    )
  })

  //useEfffect is used to keep track of subtotal of all the items in the customers cart 
  useEffect(() => {
    async function getSubtTotal() {
      var g=0;
     
       for (var i=0; i<cart.length;i++){
        g= g+ cart[i][0].price
       }
       g = (Math.round(g * 100) / 100).toFixed(2); //Rounds subtotal price to 2 decimal places 
       setSubtotal(prevstate=>g)
    }
    getSubtTotal()
}, [activeui,drawerState])

  //This function removes the given item from the cart, this occurs during the checkout screen when the customer has the option to remove items from their cart 
  function removefromcart(num){
    for(var h =0; h<cart.length; h++){ //Each item within the array has a unique number, code loops through the list and searchs for the number 
      if(cart[h][0].rd==num){
        break;
      }
    }
    tempclone =[];
    //Using array.slice removes the given index out of the array 
      tempclone = cart.slice(0,h).concat(cart.slice(h+1,cart.length))
      setCart(prevstate=>tempclone)
      setDrawerState(prevstate=>!prevstate)
      if(tempclone.length==0){ //If no more items in cart then switchs back to main menu screen 
        changeview(0)      
      }
   
  }

  //This function is called when the order is confirmed, as of right now it simply just clears the cart but once the backend is in place it will actually process the order
  function orderConfirm(){
    
    newOrder();
    setCart(prevstate=>[])
    changeview(6);
    alert("Order Confirmed, at the moment the employee facing front end is still not complete. Once that is complete you will be able to view your order from the employee's POV and view track other analytics about orders")
  }

  //Function is called when the customer hits the confirm order button, the order is then passed onto the backend where the data is then stored into the Mongo Db
  async function newOrder(){
    var m =false;
    tempclone = cart;
    const orderx = {order:cart,status:false,ordernum:ordernum}
    const response = await fetch("https://cookiemonster.fly.dev/",{
      method:'POST',
      body: JSON.stringify(orderx),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
            if(!response.ok){
                console.log("An Error Occured Please Try Again Later")
            }
            if(response.ok){
                //Resets state values as data was sent to db
                setCart(prevstate=>[]);
                changeview(6)
                await delay(5000) //Waits 5 seconds then brought back to the main menu screen 
                changeview(0)
            }
  }


  return (
    <>
    
    <NavBar/>
   
    {activeui==0 && <Mainmenu handleClick ={changeview} currentcart={cart} />}
    {activeui ==1 && <h2 id='largetext'>Cookies</h2>}
    <div id="rows">
    {activeui ==1 && cookiebox}
    {activeui==3 && drinkmenu}
      </div>
      {activeui==2 &&  boxsize-cookielayout.length+1>0 && <h2 id='largetext'>Pick Cookies For Your Box</h2>}
      {activeui==2 &&  boxsize-cookielayout.length+1==0 &&<h2 id='largetext'>How does this look?</h2>}
      {activeui==2 && <h5 id='desc'>Tap a cookie to remove from box</h5>}
      {activeui==2 && <Boxlayout
       size={boxsize}
       data={cookielayout}
       key={drawerState}
       onClick={removecookie}
      />}
        {activeui==2 && boxsize-cookielayout.length+1>0&& <h5 id='desc'>{boxsize-cookielayout.length+1} left</h5>}
      <div id="cookieoption">
      {activeui==2 && boxsize-cookielayout.length+1>0 &&cookieoptions}
        </div>
        {activeui==4 && <img src={drink} style={{width:'200px',display:'block',marginLeft:'auto',marginRight:'auto'}}></img>}
        { boxsize-cookielayout.length+1==0 &&<Confirmselection
        tocart={addtocart} upgrade={upgradebox} sizeofbox={boxsize} incheckout={false} 
        />}
        {activeui==4 && <Confirmselection
        tocart={addtocart} upgrade={upgradebox} sizeofbox={boxsize} uiscreen={activeui}/>}
         {activeui==5 &&<h2 id='largetext' style={{marginBottom:'20px',marginTop:'0px'}}>Checkout</h2>}
        {activeui==5 && checkoutlist}
          {activeui==5 &&<div className='subtotal'>
          <h4>Subtotal:</h4>
          <h4>${subtotal}</h4>
          </div>}
          {activeui==5 &&<section className='justsection'><button className='checkoutbutton' onClick={orderConfirm}>Confirm Order</button></section>}
          {activeui==6 &&<div className='receipt'>
          <h2 id="largetext">Thanks for ordering!</h2>
            <h2>Order Number:</h2>
            <h2>#{ordernum}</h2>
          </div>}
    </>
  )
}

export default App
