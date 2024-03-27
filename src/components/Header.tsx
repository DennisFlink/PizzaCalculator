import  { useState } from 'react';
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
                <Button className="button close" label='' onClick={() => setCartOpen(true)} /> 
            </div>
    </div>)
    :changeOrder ? ( 
    <div className="headerChange">
    {/* <h1> {pizzaData.id} </h1>; */}
        <div className="btnChange-container">
            <Button className="button close" label='' onClick={() => setChangeOrder(true)}/>
        </div>
    </div>

    ):(
    <div className="headerCart">
        <div className="btnCart-container">
            <Button className="button cart" label='' onClick={() => setCartOpen(false)}/>
        </div>
        <h1>Pizzakalkylator</h1>
    </div>) }
    </>)
    
};
    

export default Header;