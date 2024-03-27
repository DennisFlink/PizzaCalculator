import { useContext } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

type PROP = {
   type: { name: string }[]
   category: string
}


const IngredientList: React.FC<PROP> = ({ type, category }) => {
   const { dispatch, setCurrentPizza } = useContext(PizzaContext)

   const checkIfExists = (ingredientsName: string): boolean => {
      const currentPizza = setCurrentPizza()
      return currentPizza.cheese.some((c) => c === ingredientsName) || currentPizza.sauce.some((s) => s === ingredientsName) || currentPizza.toppings.some((t) => t === ingredientsName)
   }

   const handleCheckboxChange = (ingredient: { name: string }, isChecked: boolean) => {
      const currentPizza = setCurrentPizza()

      if (isChecked) {
         dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, [category]: [...currentPizza[category], ingredient.name] } })
      } else {
         dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, [category]: currentPizza[category].filter((category: string) => category !== ingredient.name) } })
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
