import { useReducer, useState } from 'react'
import { EditModeType, Pizza, PizzaContext, PizzaState } from './PizzaContext'
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
   const [size, setSize] = useState('medium')
   const [editMode, setEditMode] = useState<EditModeType>({
      editMode: false,
      id: '',
   })
   const changeSize = (size: string) => {
      setSize(size)
   }
   const changeEditMode = (edit: boolean, id: string) => {
      setEditMode({
         editMode: edit,
         id: id,
      })
   }
   console.log(state)
   return <PizzaContext.Provider value={{ editMode, changeEditMode, size, changeSize, state, dispatch }}>{children}</PizzaContext.Provider>
}

export default PizzaProvider
