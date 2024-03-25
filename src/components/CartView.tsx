import CartItem from "./CartItem"
 import { Dispatch, useContext, useReducer } from "react"
import { Pizza, PizzaContext } from "./PizzaContext" 

const CartView = () => {
   const pizzaData = useContext(PizzaContext)
   const ACTION = {
      REMOVE: 'REMOVE',
  }
  
  type Action = {
      type: string,
      payload: number,
  }
  
  type State = {
      pizzas: Pizza[]
  }
  
  const pizzaReducer = (state: State, action: Action) => {
      switch(action.type) {
          case ACTION.REMOVE:
              return {
               pizzas: state.pizzas.filter((_, index) => index !== action.payload),
              }
      }
  }
  

  const removePizza = (index: number) => {
   dispatch({ type: ACTION.REMOVE, payload: index });
};

   return (
   <div className="cart-view">
      <h2>Varukorg</h2>
      <div className="cart-item-container">
         {pizzaData.map((pizza: Pizza, index: number ) => (
            <CartItem key={index} item={pizza} removePizza={() => removePizza(index)}/>
         ))}
      </div>
   </div>
   )
}

export default CartView
