import React from "react"
import PizzaSize from "./PizzaSize"
import IngredientsBox from "./IngredientsBox";
type OrderViewProps = {}

const OrderView = ({}:OrderViewProps) => {
    return (
        <>
           <PizzaSize/> 
            <IngredientsBox type="sauce" />
            <IngredientsBox type="cheese" />
            <IngredientsBox type="toppings" />
        </>
    )
}

export default OrderView
