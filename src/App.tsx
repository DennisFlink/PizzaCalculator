import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import OrderView from './components/OrderView'
import CartView from './components/CartView'

function App() {
   return (
      <PizzaProvider>
         <OrderView />
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
         <CartView />
      </PizzaProvider>
   )
}

export default App
