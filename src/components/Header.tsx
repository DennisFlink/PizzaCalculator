import  { useState, useContext } from 'react';
import {PizzaContext} from './PizzaContext';
import Button from './Button';


const Header =() =>{


   const [cartOpen, setCartOpen] = useState(false);
   console.log(cartOpen);
   const [changeOrder, setChangeOrder] = useState(false);

   /* const pizzaData = useContext(PizzaContext); */
    
        

    
    return (
    
    <>
    {!cartOpen ? (
    <div>
    <h1> Pizzakalkylator</h1>;
  <Button  onClick={() => setCartOpen(true)}>
    <img src="" alt="" />
  </Button> 
    </div>):changeOrder ? ( <div>
    {/* <h1> {pizzaData.id} </h1>; */}
  <Button onClick={() => setChangeOrder(true)}>
    kryss
  </Button>
    </div>

    ):(
    <div>
        <Button onClick={() => setCartOpen(false)}>
    <img src="" alt="" />
  </Button>
    <h1>Pizzakalkylator</h1>;
  
    </div>) }
    </>);
    
};
    

export default Header;