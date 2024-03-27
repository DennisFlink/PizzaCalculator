import  { useContext, useState } from 'react';
import Button from './Button'
import { PizzaContext } from './PizzaContext';
import { ACTION } from './PizzaProvider';
import uuid from 'react-uuid';

type FooterProp = {
   showOrderView: boolean
   onChangeOrderView: (bool: boolean) => void;
}

const Footer = ({showOrderView,onChangeOrderView}:FooterProp) => {
    const {setCurrentPizza,dispatch,changeSize,editMode,changeEditMode} = useContext(PizzaContext);
    const currentPizza = setCurrentPizza()
    const handleButtonClick = () => {
        
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
      <footer>
         <section>     
        { !editMode.editMode && showOrderView ? (/* <p> {pizzaPrice} </p> */
            <>
            <p>BELOPP</p>
            <p className='price'>{Math.round(currentPizza.totalCost)} SEK</p>
            <Button className="button" onClick={()=> {handleButtonClick()}} label="Lägg till"></Button>
            </>
     ):!showOrderView ? ( 
      <>
      {console.log("ska visa beställ")}
            <p>BELOPP</p>
            <p className='price'>{currentPizza.totalCost} SEK</p>
            <Button className="button" onClick={()=> {onChangeOrderView(false), changeEditMode(false,"")}} label="Beställ"></Button>
      </>
        ):(
         <>
            <p>BELOPP</p>
            <p className='price'>{currentPizza.totalCost} SEK</p>
            <Button className="button" onClick={()=> {onChangeOrderView(false), changeEditMode(false,"")}} label="Uppdatera"></Button>
            
         </>
        )
        
        }
        </section>
      </footer>
        
        
        )
    }

  export default Footer;