import { useContext } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'
import uuid from 'react-uuid'

type PROP = {
   type: { name: string }[]
   category: string
}

const IngridientList: React.FC<PROP> = ({ type, category }) => {
   const { state, dispatch } = useContext(PizzaContext)

   const checkIfExists = (ingredientsName: string): boolean => {
      const index = state.pizzas.length - 1
      const currentPizza = state.pizzas[index]

      return currentPizza.cheese.some((c) => c === ingredientsName) || currentPizza.sauce.some((s) => s === ingredientsName) || currentPizza.toppings.some((t) => t === ingredientsName)
   }

   const handleCheckboxChange = (ingredient: { name: string }, isChecked: boolean) => {
      const index = state.pizzas.length - 1
      const currentPizza = state.pizzas[index]

      if (isChecked) {
         dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, [category]: [...currentPizza[category], ingredient.name] } })
      } else {
         dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, [category]: currentPizza[category].filter((category: string) => category !== ingredient.name) } })
      }
   }
   const handleButtonClick = () => {
      const index = state.pizzas.length - 1
      const currentPizza = state.pizzas[index]
      dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, done: true } })
      dispatch({ type: ACTION.ADD, payload: { id: uuid(), size: 'medium', sauce: [], cheese: [], toppings: [], totalCost: 100, done: false } })
   }

   return (
      <div className="CONTAINER">
         {type.map((ingredient, index) => (
            <div className="box" key={index}>
               <input type="checkbox" checked={checkIfExists(ingredient.name)} id={ingredient.name} onChange={(e) => handleCheckboxChange(ingredient, e.target.checked)}></input>
               <label htmlFor={ingredient.name}>{ingredient.name}</label>
            </div>
         ))}
         <button onClick={handleButtonClick}>Add Pizza</button>
      </div>
   )
}

export default IngridientList
