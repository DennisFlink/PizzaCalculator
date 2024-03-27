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
        <Button className="button" onClick={()=> setCartOpen(true)} label="Lägg till"></Button>
     </div>)
        
        :changeOrder ? ( 
            <div>
            {/* <p>  {pizzaPrice} </p> */}
            <p>belopp: 160kr</p>
            <Button className="button" onClick={()=> setChangeOrder(true)} label="Uppdatera"></Button>
         </div>
    
        ):(
            <div>
            {/* <p>{totalPrice} </p> */}
            <p>belopp: 150kr</p>
            <Button className="button" onClick={()=> setCartOpen(false)} label="Beställ"></Button>
         </div>) }
        
        </>)
    }

  export default Footer;