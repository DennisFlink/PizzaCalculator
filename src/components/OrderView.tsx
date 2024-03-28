import PizzaSize from './PizzaSize'
import IngredientsBox from './IngredientsBox'

const OrderView = () => {
   return (
      <>
         <PizzaSize />
         <div className="order-view">
            <IngredientsBox type="sauce" />
            <IngredientsBox type="cheese" />
            <IngredientsBox type="toppings" />
         </div>
      </>
   )
}

export default OrderView
