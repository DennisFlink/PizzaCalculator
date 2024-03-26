import { useState } from 'react'
import { Ingredients } from './PizzaContext'

type IngredientsBoxProps = {
   type: string
}

const IngredientsBox = ({ type }: IngredientsBoxProps) => {
   const ingredients = Ingredients

   /*  const categories: String[] = Object.keys(ingredients).filter((key) => !key.includes('Price'))

   console.log(categories) */

   const [isActive, setIsActive] = useState(false)
   return (
      <section className="ingredients-box">
         {/* ändra detta till att ta emot från ingridentsContext istället?*/}
         {type === 'sauce' ? (
            <section className="title">
               <h2>SÖS</h2>
               <p>{ingredients.sacuePrice} SEK</p>
            </section>
         ) : type === 'cheese' ? (
            <section className="title">
               <h2>OST</h2>
               <p>{ingredients.cheesePrice} SEK</p>
            </section>
         ) : type === 'toppings' ? (
            <section className="title">
               <h2>Toppings</h2>
               <p>{ingredients.toppingsPrice} SEK</p>
            </section>
         ) : null}

         <section className="accordian">
            <hr />
            {/* rotate arrow */}
            {!isActive ? (
               <img className="accordian-inactive" onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            ) : (
               <img onClick={() => setIsActive(!isActive)} src="src/assets/arrow.svg" alt="arrow" />
            )}
         </section>

         {isActive && (
            <section>
               <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
               </ul>
            </section>
         )}
      </section>
   )
}

export default IngredientsBox
