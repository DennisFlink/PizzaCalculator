import { useContext, useState } from 'react'
import Button from './Button'
import { PizzaContext } from './PizzaContext'
type HeaderProp = {
   onChangeOrderView: (bool: boolean) => void
}

const Header = ({ onChangeOrderView }: HeaderProp) => {
   const [cartOpen, setCartOpen] = useState(false)
   console.log(cartOpen)
   const { state, editMode } = useContext(PizzaContext)

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
                        onChangeOrderView(true), setCartOpen(false)
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
                        onChangeOrderView(false), setCartOpen(true)
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
