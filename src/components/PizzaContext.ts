import { createContext } from 'react'
import { Action } from './PizzaProvider'
import uuid from 'react-uuid'

type Ingredients = {
   sauce: { name: string }[]
   sacuePrice: number
   cheese: { name: string }[]
   cheesePrice: number
   toppings: { name: string }[]
   toppingsPrice: number
}

export type Pizza = {
   id: string
   size: string
   sauce: string[],
   cheese: string[],
   toppings: string[]
   totalCost: number,
   [key: string]: any
}

export type EditModeType = {
   editMode: boolean,
   id: string
}

export const Ingredients: Ingredients = {
   sauce: [{ name: 'Tomatsås' }, { name: 'Pesto' }, { name: 'Créme fraiche' }, { name: 'Bechamele' }],
   sacuePrice: 10,
   cheese: [{ name: 'Mozarella' }, { name: 'Parmesan' }, { name: 'Mögelost' }, { name: 'Burrata' }, { name: 'Ricotta' }, { name: 'Cheddar' }, { name: 'Pepperjack' }],
   cheesePrice: 15,

   toppings: [
      { name: 'Skinka' },
      { name: 'Champinjoner' },
      { name: 'Ananas' },
      { name: 'Parmaskinka' },
      { name: 'Oxfile' },
      { name: 'Fälskfile' },
      { name: 'Nötkebab' },
      { name: 'Kycklingkebab' },
      { name: 'Fläskkebab' },
      { name: 'Tomat' },
      { name: 'Sallad' },
      { name: 'Gurka' },
      { name: 'Pommes' },
      { name: 'Rödlök' },
      { name: 'Curry' },
      { name: 'Banan' },
      { name: 'Salami' },
      { name: 'Majs' },
      { name: 'Ärtor' },
      { name: 'Dill' },
      { name: 'Sill' },
      { name: 'Lök' },
      { name: 'Rödlök' },
   ],
   toppingsPrice: 20,
}

const inititalEditModeState: EditModeType = {
   editMode: false,
   id: ""
}

export type PizzaState = {
   pizzas: Pizza[]
}

export const initialPizzaState: PizzaState = {
   pizzas: [{ id: uuid(), size: 'medium', sauce: [], cheese: [], toppings: [], totalCost: 100, done: false }],
}

export const PizzaContext = createContext<{
   editMode: EditModeType,
   changeEditMode: (editMode:boolean,id:string) => void,
   size: string,
   changeSize: (size:string) => void,
   state: PizzaState
   dispatch: React.Dispatch<Action>
}>({
   editMode: inititalEditModeState,
   changeEditMode: () => {},
   size: "medium",
   changeSize: () => {},
   state: initialPizzaState,
   dispatch: () => null,
})
