import { useContext } from 'react'
import Button from './Button'
import { PizzaContext } from './PizzaContext'
type HeaderProp = {
   onChangeOrderView: (bool: boolean) => void
}

const Header = ({ onChangeOrderView }: HeaderProp) => {

   const { state, editMode, changeCartOpen, cartOpen } = useContext(PizzaContext)

   const pizzaNumber = state.pizzas.findIndex((p) => p.id === editMode.id) + 1

   return (
      <header>
         {cartOpen && !editMode.editMode ? (
            <>
               <div className="btnChange-container">
                  <Button
                     className="button close"
                     label=""
                     onClick={() => {
                        onChangeOrderView(true), changeCartOpen(false)
                     }}
                  />
               </div>
               <h1>Pizzakalkylator</h1>
            </>
         ) : editMode.editMode ? (
            <h1>Pizza {pizzaNumber}</h1>
         ) : (
            <>
               <h1>Pizzakalkylator</h1>
               <div className="btnCart-container">
                  <Button
                     className="button cart"
                     label=""
                     onClick={() => {
                        onChangeOrderView(false), changeCartOpen(true)
                     }}
                  />
                  {state.pizzas.length - 1 > 0 ? <div className="number-of-cart-items">{state.pizzas.length - 1}</div> : null}
               </div>
            </>
         )}
      </header>
   )
}

export default Header
