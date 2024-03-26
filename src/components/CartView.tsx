import CartItem from "./CartItem"
 import { useContext,  } from "react"
import { Pizza, PizzaContext } from "./PizzaContext" 

const CartView = () => {
   const pizzaData = useContext(PizzaContext)

 
   return (
   <div className="cart-view">
      <h2>Varukorg</h2>
      <div className="cart-item-container">
         {pizzaData.state.map((pizza: Pizza, index: number ) => (
            <CartItem id={index} item={pizza}/>
         ))}
      </div>
   </div>
   )
}

export default CartView
