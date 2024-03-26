import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import { Ingredients } from './components/PizzaContext'

function App() {
   return (
      <PizzaProvider>
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
      </PizzaProvider>
   )
}

export default App
