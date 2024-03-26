import { useContext, useRef } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

type PROP = {
   type: { name: string }[]
}

const IngridientList: React.FC<PROP> = ({ type }) => {
   const { state, dispatch } = useContext(PizzaContext)

   const checkIfExists = (ingredientsName: string): boolean => {
      const index = state.pizzas.length - 1
      const currentPizza = state.pizzas[index]

      return currentPizza.chees.some((c) => c === ingredientsName) || currentPizza.sauce.some((s) => s === ingredientsName) || currentPizza.toppings.some((t) => t === ingredientsName)
   }

   const handleCheckboxChange = (ingredient: { name: string }, isChecked: boolean) => {
      if (isChecked) {
         const index = state.pizzas.length - 1
         dispatch({ type: ACTION.EDIT, payload: { ...state.pizzas[index], chees: [ingredient.name] } })
      }
   }
   const handleButtonClick = () => {
      dispatch({ type: ACTION.EDIT, payload: { id: '1', size: 'medium', sauce: [], chees: [], toppings: [], totalCost: 100 } })
   }

   return (
      <div className="CONTAINER">
         {type.map((ingrident, index) => (
            <div className="box" key={index}>
               <input type="checkbox" checked={checkIfExists(ingrident.name)} id={ingrident.name} onChange={(e) => handleCheckboxChange(ingrident, e.target.checked)}></input>
               <label htmlFor={ingrident.name}>{ingrident.name}</label>
            </div>
         ))}
         <button onClick={handleButtonClick}>Add Pizza</button>
      </div>
   )
}

export default IngridientList
