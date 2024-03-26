import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'

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
