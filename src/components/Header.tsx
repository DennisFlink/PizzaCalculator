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
    <div className="headerDefault">
        <h1> Pizzakalkylator</h1>;
            <div className="btnDefault-container">
                <Button className="closeBtn" onClick={() => setCartOpen(true)} /> 
            </div>
    </div>)
    :changeOrder ? ( 
    <div className="headerChange">
    {/* <h1> {pizzaData.id} </h1>; */}
        <div className="btnChange-container">
            <Button className="closeBtn" onClick={() => setChangeOrder(true)}/>
        </div>
    </div>

    ):(
    <div className="headerCart">
        <div className="btnCart-container">
            <Button className="cartBtn" onClick={() => setCartOpen(false)}/>
        </div>
        <h1>Pizzakalkylator</h1>
    </div>) }
    </>)
    
};
    

export default Header;