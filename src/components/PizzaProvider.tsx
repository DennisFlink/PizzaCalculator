import { useReducer } from 'react'
import { Pizza, PizzaContext, PizzaState } from './PizzaContext'
import { initialPizzaState } from './PizzaContext'

export const ACTION = {
   ADD: 'ADD',
   REMOVE: 'REMOVE',
   EDIT: 'EDIT',
}

export type Action = {
   type: string
   payload: Pizza
}

const pizzaReducer = (state: PizzaState, action: Action): PizzaState => {
   switch (action.type) {
      case ACTION.ADD:
         return { ...state, pizzas: [...state.pizzas, action.payload] }
      case ACTION.EDIT:
         return {
            ...state,
            pizzas: state.pizzas.map((pizza) => {
               if (pizza.id === action.payload.id) {
                  return action.payload
               }
               return pizza
            }),
         }
      case ACTION.REMOVE:
         return {
            pizzas: state.pizzas.filter((p) => p.id != action.payload.id),
         }

      default:
         throw new Error('Wrong with action type')
   }
}
type PizzaProviderProps = {
   children: React.ReactNode
}

const PizzaProvider = ({ children }: PizzaProviderProps) => {
   const [state, dispatch] = useReducer(pizzaReducer, initialPizzaState)
   console.log(state.pizzas)
   return <PizzaContext.Provider value={{ state, dispatch }}>{children}</PizzaContext.Provider>
}

export default PizzaProvider
