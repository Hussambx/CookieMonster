import React from "react";
import cookie from '../assets/cookiesm.png';
import icecream from '../assets/icecream.png';
import drinks from '../assets/drink.png';
import giftcard from '../assets/gift.png';
import catering from '../assets/cookies.png';
import extraitems from '../assets/catering.png';
export default function Mainmenu(props){
    return(
        <>
        <h2 id="largetext">What would you like today?</h2>
        <div id="mainoption">
            <section>
            <img src={cookie} id="largeicon" ></img>
            <h4>Cookies</h4>
            </section>
            <section>
            <img src={icecream} id="largeicon"></img>
            <h4>Ice Cream</h4>
            </section>
        
        </div>


        <div id ="secondaryoptions">
        <section>
        <img src={drinks} id="smallicon"></img>
        <h5>Drinks</h5>
        </section>
        <section>
        <img src={giftcard} id="smallicon"></img>
        <h5>Gift Card</h5>
        </section>
        <section>
        <img src={catering} id="smallicon"></img>
        <h5>Catering</h5>
        </section>
        <section>
        <img src={extraitems} id="smallicon"></img>
        <h5>Misc.</h5>
        </section>

        </div>
        </>
    )
}