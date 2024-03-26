import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import OrderView from './components/OrderView'
function App() {
   return (
      <PizzaProvider>
         <OrderView />
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
      </PizzaProvider>
   )
}

export default App
