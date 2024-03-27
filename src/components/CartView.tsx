import CartItem from './CartItem'
import { useContext } from 'react'
import { Pizza, PizzaContext } from './PizzaContext'
type CartViewProp = {
   onChangeOrderView: (bool: boolean) => void;
}
const CartView = ({onChangeOrderView}:CartViewProp) => {
   const pizzaData = useContext(PizzaContext)

   return (
      <div className="cart-view">
         <h2>Varukorg</h2>
         <div className="cart-item-container">
            {pizzaData.state.pizzas
               .filter((pizza) => pizza.done === true)
               .map((pizza: Pizza) => (
                  <CartItem key={pizza.id} id={pizza.id} onChangeOrderView={onChangeOrderView} />
               ))}
         </div>
      </div>
   )
}

export default CartView
