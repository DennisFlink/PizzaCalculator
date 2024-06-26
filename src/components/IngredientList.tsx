import { useContext } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

type PROP = {
   type: { name: string; price: number }[]
   category: string
}

const IngredientList: React.FC<PROP> = ({ type, category }) => {
   const { setCurrentPizza, dispatch } = useContext(PizzaContext)
   const currentPizza = setCurrentPizza()

   const checkIfExists = (ingredientsName: string): boolean => {
      const currentPizza = setCurrentPizza()
      return currentPizza.cheese.some((c) => c === ingredientsName) || currentPizza.sauce.some((s) => s === ingredientsName) || currentPizza.toppings.some((t) => t === ingredientsName)
   }

   const handleCheckboxChange = (ingredient: { name: string; price: number }, isChecked: boolean) => {
      let currentPrice: number = currentPizza.totalCost.ingredientsCost
      if (isChecked) {
         currentPrice += ingredient.price
         dispatch({
            type: ACTION.EDIT,
            payload: { ...currentPizza, [category]: [...currentPizza[category], ingredient.name], totalCost: { ...currentPizza.totalCost, ingredientsCost: currentPrice } },
         })
      } else {
         currentPrice -= ingredient.price
         dispatch({
            type: ACTION.EDIT,
            payload: {
               ...currentPizza,
               [category]: currentPizza[category].filter((category: string) => category !== ingredient.name),
               totalCost: { ...currentPizza.totalCost, ingredientsCost: currentPrice },
            },
         })
      }
   }

   return (
      <div className="ingredient-list-container">
         {type.map((ingredient, index) => (
            <div className="box" key={index}>
               <input type="checkbox" checked={checkIfExists(ingredient.name)} id={ingredient.name} onChange={(e) => handleCheckboxChange(ingredient, e.target.checked)}></input>
               <label htmlFor={ingredient.name}>{ingredient.name}</label>
            </div>
         ))}
      </div>
   )
}

export default IngredientList
