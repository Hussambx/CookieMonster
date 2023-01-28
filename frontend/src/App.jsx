import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Mainmenu from './components/Mainmenu'
import Secondmenu from './components/Secondmenu'
import cookieboxdata from './data/cookieboxsizes'
import cookietypes from './data/cookieoptions'
import Cookiemenu from './components/Cookiemenu'

function App() {
  const [activeui, setUi] = useState(0);  //Zero =Main Menu, 1=Secondary Menu, 2 = Cookie Menu, 3=Drink Screen 
  const [boxsize,setSize] = useState(1);  //Keeps track of selected cookie box sizes, Options: 1,4,6,12

  //Keeps track of what UI element should be displayed 
  function changeview(num){
    setUi(prevstate=>1)
   // num==1?console.log(secmenu):console.log(secmenu)
  }

  //Keeps track of box size that is selected, and changes ui to cookie menu 
  function cookieboxsize(num){
    setUi(prevstate=>2)
    setSize(prevstate=>num)
  }

  //Is Called when a cookie flavor is selected
  function pickedcookie(name,img,id){
    console.log(name)
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
      <div id="cookieoption">
        
      {activeui==2 && cookieoptions}
        
        </div>

     
  
    </>
  )
}

export default App
