import { createContext } from 'react'
import { Action } from './PizzaProvider'
import uuid from 'react-uuid'


export type Pizza = {
   id: string
   size: string
   sauce: string[]
   cheese: string[]
   toppings: string[]
   totalCost: {
      sizeCost: number
      ingredientsCost: number
   }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   [key: string]: any
}

export type EditModeType = {
   editMode: boolean
   id: string
}
type Ingredients = {
   sauce: { name: string; price: number }[]
   sacuePrice: number
   cheese: { name: string; price: number }[]
   cheesePrice: number
   toppings: { name: string; price: number }[]
   toppingsPrice: number
}

export const Ingredients: Ingredients = {
   sauce: [
      { name: 'Tomatsås', price: 10 },
      { name: 'Pesto', price: 10 },
      { name: 'Créme fraiche', price: 10 },
      { name: 'Bechamele', price: 10 },
   ],
   sacuePrice: 10,
   cheese: [
      { name: 'Mozarella', price: 15 },
      { name: 'Parmesan', price: 15 },
      { name: 'Mögelost', price: 15 },
      { name: 'Burrata', price: 15 },
      { name: 'Ricotta', price: 15 },
      { name: 'Cheddar', price: 15 },
      { name: 'Pepperjack', price: 15 },
   ],
   cheesePrice: 15,

   toppings: [
      { name: 'Skinka', price: 20 },
      { name: 'Champinjoner', price: 20 },
      { name: 'Ananas', price: 20 },
      { name: 'Parmaskinka', price: 20 },
      { name: 'Oxfile', price: 20 },
      { name: 'Fälskfile', price: 20 },
      { name: 'Nötkebab', price: 20 },
      { name: 'Kycklingkebab', price: 20 },
      { name: 'Fläskkebab', price: 20 },
      { name: 'Tomat', price: 20 },
      { name: 'Sallad', price: 20 },
      { name: 'Gurka', price: 20 },
      { name: 'Pommes', price: 20 },
      { name: 'Curry', price: 20 },
      { name: 'Banan', price: 20 },
      { name: 'Salami', price: 20 },
      { name: 'Majs', price: 20 },
      { name: 'Ärtor', price: 20 },
      { name: 'Dill', price: 20 },
      { name: 'Sill', price: 20 },
      { name: 'Lök', price: 20 },
      { name: 'Rödlök', price: 20 },
   ],
   toppingsPrice: 20,
}

const inititalEditModeState: EditModeType = {
   editMode: false,
   id: '',
}

export type PizzaState = {
   pizzas: Pizza[]
}

export const initialPizzaState: PizzaState = {
   pizzas: [{ id: uuid(), size: 'medium', sauce: [], cheese: [], toppings: [], totalCost: { sizeCost: 100, ingredientsCost: 0 }, done: false }],
}

export const PizzaContext = createContext<{
   editMode: EditModeType
   changeEditMode: (editMode: boolean, id: string) => void
   size: string
   changeSize: (size: string) => void
   state: PizzaState
   dispatch: React.Dispatch<Action>
   setCurrentPizza: () => Pizza
   changeCartOpen: (bool: boolean) => void
   cartOpen: boolean
}>({
   editMode: inititalEditModeState,
   changeEditMode: () => {},
   size: 'medium',
   changeSize: () => {},
   state: initialPizzaState,
   dispatch: () => null,
   setCurrentPizza: () => initialPizzaState.pizzas[0],
   changeCartOpen: () => {},
   cartOpen: false,
})
