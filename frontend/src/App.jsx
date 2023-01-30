import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Mainmenu from './components/Mainmenu'
import Secondmenu from './components/Secondmenu'
import cookieboxdata from './data/cookieboxsizes'
import cookietypes from './data/cookieoptions'
import Cookiemenu from './components/Cookiemenu'
import Boxlayout from './components/Boxlayout'
function App() {
  const [activeui, setUi] = useState(0);  //Zero =Main Menu, 1=Secondary Menu, 2 = Cookie Menu, 3=Drink Screen 
  const [boxsize,setSize] = useState(1);  //Keeps track of selected cookie box sizes, Options: 1,4,6,12
  const[cookielayout,setLayout] = useState([]); //Keeps track of the cookie box layout (Which cookies are in the given box + Order Of Them Left To Right),  this is only temp and once layout is confirmed list will be pushed to cart 
  const [drawerState, setDrawerState] = useState(false);   //This is used to force re-render Boxlayout element 
  
  var tempclone;
  
  //Keeps track of what UI element should be displayed 
  function changeview(num){
    setUi(prevstate=>1)
   // num==1?console.log(secmenu):console.log(secmenu)
  }

  //Keeps track of box size that is selected, and changes ui to cookie menu 
  function cookieboxsize(num,name,price){
    setUi(prevstate=>2)
    setSize(prevstate=>num)
    var a= [{name:name,price:price,index:0}] //Sets the name of the box + price 
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

  return (
    <>
    
    <NavBar/>
    {activeui==0 && <Mainmenu handleClick ={changeview}/>}
    {activeui ==1 && <h2 id='largetext'>Cookies</h2>}
    <div id="rows">
    {activeui ==1 && cookiebox}
      </div>
      {activeui==2 && <h2 id='largetext'>Pick Cookies For Your Box</h2>}
      {activeui==2 && <h5 id='desc'>Tap a cookie to remove from box</h5>}
      {activeui==2 && <Boxlayout
       size={boxsize}
       data={cookielayout}
       key={drawerState}
       onClick={removecookie}
      />}
        {activeui==2 && boxsize-cookielayout.length+1>0&& <h5 id='desc'>{boxsize-cookielayout.length+1} left</h5>}
      <div id="cookieoption">
        
      {activeui==2 && cookieoptions}
        
        </div>

     
  
    </>
  )
}

export default App
