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
      <section className="category-rule">
         <article className="category-container">
            <section className="category-price">
               <h2>{title}</h2>
               <p>{price} SEK</p>
            </section>
            {!isActive ? (
               <img className="accordion-inactive" onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            ) : (
               <img onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            )}
         </article>

         <div className="rule-arrow">{/*  <hr /> */}</div>

         {isActive && <IngridientList type={ingredients[type]} category={type} />}
      </section>
   )
}

export default IngredientsBox
