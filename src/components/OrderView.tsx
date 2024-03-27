import React from 'react'
import PizzaSize from './PizzaSize'
import IngredientsBox from './IngredientsBox'
type OrderViewProps = {}

const OrderView = ({}: OrderViewProps) => {
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
