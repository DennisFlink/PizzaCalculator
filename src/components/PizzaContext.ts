import { createContext } from 'react'
type Ingredient = {
   name: string
   price: number
}

type Ingredients = {
   sauce: Ingredient[]
   cheese: Ingredient[]
   toppings: Ingredient[]
}

type Pizza = {
   size: string
   ingredients: Ingredients
   totalCost: number
}

export const Ingredients: Ingredients = {
   sauce: [
      { name: 'Tomatsås', price: 10 },
      { name: 'Pesto', price: 10 },
      { name: 'Créme fraiche', price: 10 },
      { name: 'Bechamele', price: 10 },
   ],
   cheese: [
      { name: 'Mozarella', price: 15 },
      { name: 'Parmesan', price: 15 },
      { name: 'Mögelost', price: 15 },
      { name: 'Burrata', price: 15 },
      { name: 'Ricotta', price: 15 },
      { name: 'Cheddar', price: 15 },
      { name: 'Pepperjack', price: 15 },
   ],

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
      { name: 'Rödlök', price: 20 },
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
}

export const initialPizzaState: Pizza = {
   size: '',
   ingredients: {
      sauce: [],
      cheese: [],
      toppings: [],
   },
   totalCost: 0,
}

export const PizzaContext = createContext<Pizza>(initialPizzaState)
