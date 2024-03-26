import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import CartView from './components/CartView'

function App() {
   return (
      <PizzaProvider>
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
         <CartView/>
      </PizzaProvider>
   )
}

export default App
