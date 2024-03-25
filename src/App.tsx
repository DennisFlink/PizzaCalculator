import IngridientList from './components/IngridientList'
import PizzaProvider from './components/PizzaProvider'
import { Ingredients } from './components/PizzaContext'

function App() {
   return (
      <PizzaProvider>
         <IngridientList type={Ingredients.sauce} />
         <IngridientList type={Ingredients.cheese} />
         <IngridientList type={Ingredients.toppings} />
      </PizzaProvider>
   )
}

export default App
