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
   ingridients: Ingredients
   totalCost: number
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

export type PizzaState = {
   map(arg0: (pizza: Pizza, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
   pizzas: Pizza[]
}

export const initialPizzaState: Pizza[] = [{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
},
{
   size: 'Large',
   ingridients: {
       sauce: [
           { name: 'Tomatsås', price: 10 },
           { name: 'Pesto', price: 10 },
       ],
       cheese: [
           { name: 'Mozarella', price: 15 },
           { name: 'Parmesan', price: 15 },
       ],
       toppings: [
           { name: 'Skinka', price: 20 },
           { name: 'Champinjoner', price: 20 },
           { name: 'Ananas', price: 20 },
       ],
   },
   totalCost: 10 + 15 + 20 + 20 + 20 
}]

export const PizzaContext = createContext<{
   state: PizzaState
   dispatch: React.Dispatch<Action>
}>({
   state: initialPizzaState,
   dispatch: () => null,
})
