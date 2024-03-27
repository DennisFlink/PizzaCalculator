import CartItem from './CartItem'
import { useContext } from 'react'
import { Pizza, PizzaContext } from './PizzaContext'

const CartView = () => {
   const pizzaData = useContext(PizzaContext)

   return (
      <div className="cart-view">
         <h2>Varukorg</h2>
         <div className="cart-item-container">
            {pizzaData.state.pizzas
               .filter((pizza) => pizza.done === true)
               .map((pizza: Pizza) => (
                  <CartItem key={pizza.id} id={pizza.id} />
               ))}
         </div>
      </div>
   )
}

export default CartView
