import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Mainmenu from './components/Mainmenu'
import Secondmenu from './components/Secondmenu'
import cookieboxdata from './data/cookieboxsizes'
function App() {
  const [secmenu, setMenu] = useState(-1)
  const [secmenuactive, setActive] = useState(0)

  //Keeps track of what items should be displayed on secondary menu cookies =0 drinks =2 and back to main menu = -1 
  function changeview(num){
    setMenu(prevstate=> num);
    setActive(prevstate=>1)
    num==1?console.log(secmenu):console.log(secmenu)
  }

  const cookiebox =cookieboxdata.map(cookieboxdata=>{
    return(
      <Secondmenu
      name ={cookieboxdata.name}
      desc = {cookieboxdata.desc}
      price = {cookieboxdata.price}
      img = {cookieboxdata.img}
      id ={cookieboxdata.id}
      key = {cookieboxdata.id}
      
      />


    )
    
  })


  return (
    <>
    
    <NavBar/>
    {secmenu==-1 && <Mainmenu handleClick ={changeview}/>}
    {secmenuactive ==1 && <h2 id='largetext'>Cookies</h2>}
    <div id="rows">
    {secmenuactive ==1 && cookiebox}
      </div>
  
    </>
  )
}

export default App
