import { useState, useContext } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

type CartItemProps = {
   id: string
   onChangeOrderView: (bool: boolean) => void
}

const CartItem: React.FC<CartItemProps> = ({ id, onChangeOrderView }) => {
   const [isActive, setIsActive] = useState(false)
   const { changeEditMode, changeSize, state, dispatch } = useContext(PizzaContext)
   const [currentPizza] = state.pizzas.filter((p) => p.id === id)
   const pizzaNumber = state.pizzas.findIndex((p) => p.id === id) + 1
   return (
      <div className="cart-item">
         <div className="accordion">
            <div className="accordion-item">
               <div className="accordion-title">
                  <img src="./assets/close.svg" alt="a cross" onClick={() => dispatch({ type: ACTION.REMOVE, payload: currentPizza })} />
                  <img
                     src="./assets/edit.svg"
                     alt="a pen"
                     onClick={() => {
                        changeEditMode(true, id), changeSize(currentPizza.size), onChangeOrderView(true)
                     }}
                  />
                  <div>
                     Pizza: {pizzaNumber} : {currentPizza.size}
                  </div>
                  <div>{currentPizza.totalCost.ingredientsCost + currentPizza.totalCost.sizeCost} kr</div>
                  <div>
                     {isActive ? (
                        <img className="accordion-inactive" onClick={() => setIsActive(!isActive)} src="./assets/arrow.svg" alt="arrow" />
                     ) : (
                        <img className="accordion-active" onClick={() => setIsActive(!isActive)} src="./assets/arrow.svg" alt="a arrow" />
                     )}
                  </div>
               </div>
               {isActive && (
                  <div className="accordion-content">
                     <ul>
                        Sås:
                        {currentPizza.sauce.map((sauce, index) => (
                           <li key={index}>{sauce}</li>
                        ))}
                     </ul>
                     <ul>
                        Ost:
                        {currentPizza.cheese.map((cheese, index) => (
                           <li key={index}>{cheese}</li>
                        ))}
                     </ul>
                     <ul>
                        Topping:
                        {currentPizza.toppings.map((toppings, index) => (
                           <li key={index}>{toppings}</li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default CartItem
