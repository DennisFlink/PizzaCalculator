import  { useState } from 'react';
import Button from './Button'
/* import {pizzaPrice} from './'
import {totalPrice} from './' */

const Footer = () => {
    const [cartOpen, setCartOpen] = useState(false);
    console.log(cartOpen);
    const [changeOrder, setChangeOrder] = useState(false);

    return (
        <>
        {!cartOpen ? (
        <div>
        {/* <p> {pizzaPrice} </p> */}
        <p>belopp: 170kr</p>
        <Button className="add" onClick={()=> setCartOpen(true)} buttonText="Lägg till"></Button>
     </div>)
        
        :changeOrder ? ( 
            <div>
            {/* <p>  {pizzaPrice} </p> */}
            <p>belopp: 160kr</p>
            <Button className="update" onClick={()=> setChangeOrder(true)} buttonText="Uppdatera"></Button>
         </div>
    
        ):(
            <div>
            {/* <p>{totalPrice} </p> */}
            <p>belopp: 150kr</p>
            <Button className="buy" onClick={()=> setCartOpen(false)} buttonText="Beställ"></Button>
         </div>) }
        
        </>)








     
    /*  if(!cartOpen){
        <>
     <div>
        <p>{ *//* {pizzaPrice} *//* }</p>
        <Button className="add" onClick={()} buttonText="Lägg till"></Button>
     </div>
     </>
    }
   else if (){
        <>
     <div>
        <p>{ *//* {totalPrice} *//* }</p>
        <Button className="buy" onClick={()} buttonText="Beställ"></Button>
     </div>
     </>
    }
    else(){
        <>
     <div>
        <p>{ *//* {pizzaPrice} *//* }</p>
        <Button className="update" onClick={()} buttonText="Uppdatera"></Button>
     </div>
     </> */
    /* } */
    }
  export default Footer;