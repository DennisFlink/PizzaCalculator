import { useState } from 'react'
import { Ingredients } from './PizzaContext'
import IngridientList from './IngredientList'
type IngredientsBoxProps = {
   type: string
}

const IngredientsBox = ({ type }: IngredientsBoxProps) => {
   const ingredients = Ingredients
   let title = ''
   let price = ' '
   switch (type) {
      case 'sauce':
         title = 'SÖS'
         price = ingredients.sacuePrice.toString()
         break
      case 'cheese':
         title = 'OST'
         price = ingredients.cheesePrice.toString()
         break
      case 'toppings':
         title = 'TOPPINGS'
         price = ingredients.toppingsPrice.toString()
         break
      default:
         throw new Error('Wrong with inputs')
   }

   const [isActive, setIsActive] = useState(false)
   return (
      <section className="ingredients-box">
         <section className="title">
            <h2>{title}</h2>
            <p>{price}</p>
         </section>
         <section className="accordian">
            <hr />
            {!isActive ? (
               <img className="accordian-inactive" onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            ) : (
               <img onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            )}
         </section>

         {isActive && <IngridientList type={ingredients[type]} category={type} />}
      </section>
   )
}

export default IngredientsBox
