import { useReducer, useState } from 'react'
import { EditModeType, Pizza, PizzaContext, PizzaState } from './PizzaContext'
import { initialPizzaState } from './PizzaContext'

export const ACTION = {
   ADD: 'ADD',
   REMOVE: 'REMOVE',
   EDIT: 'EDIT',
   UPDATE_PRICE: 'UPDATE_PRICE',
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
      case ACTION.UPDATE_PRICE:
         return {
            ...state,
            pizzas: state.pizzas.map((pizza) => {
               if (pizza.id === action.payload.id) {
                  return action.payload
               }
               return pizza
            }),
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
   const [cartOpen, setCartOpen] = useState(false)

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
   const changeCartOpen = (bool: boolean) => {
      setCartOpen(bool)
   }
   const setCurrentPizza = (): Pizza => {
      let index: number
      if (editMode.editMode) {
         index = state.pizzas.findIndex((p) => p.id === editMode.id)
      } else {
         index = state.pizzas.length - 1
      }
      return state.pizzas[index]
   }
   return <PizzaContext.Provider value={{ setCurrentPizza, editMode, changeEditMode, size, changeSize, state, dispatch, changeCartOpen, cartOpen }}>{children}</PizzaContext.Provider>
}

export default PizzaProvider
