import  { useContext, useState } from 'react';
import Button from './Button'
import { PizzaContext } from './PizzaContext';
import { ACTION } from './PizzaProvider';
import uuid from 'react-uuid';


const Footer = () => {
    const [cartOpen, setCartOpen] = useState(false);
    console.log(cartOpen);
    const [changeOrder, setChangeOrder] = useState(false);
    const {setCurrentPizza,dispatch,changeSize,editMode,changeEditMode} = useContext(PizzaContext);
    const handleButtonClick = () => {
        const currentPizza = setCurrentPizza()
        console.log('currentpizza: ', currentPizza)
        if (!editMode.editMode) {
           dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, done: true } })
           dispatch({ type: ACTION.ADD, payload: { id: uuid(), size: 'medium', sauce: [], cheese: [], toppings: [], totalCost: 100, done: false } })
           changeSize('medium')
        } else {
           dispatch({ type: ACTION.EDIT, payload: currentPizza })
           changeEditMode(false, '')
        }
     }

    return (
        <>
        
        { !editMode.editMode ? (/* <p> {pizzaPrice} </p> */
        <div>
            <p>belopp: 170kr</p>
            <Button className="button" onClick={()=> {handleButtonClick()}} label="Lägg till"></Button>
        </div>
     ): ( 
            <div>
            {/* <p>  {pizzaPrice} </p> */}
            <p>belopp: 160kr</p>
            <Button className="button" onClick={()=> changeEditMode(false,"")} label="Uppdatera"></Button>
         </div>
    
        )}

        
        </>)
    }

  export default Footer;