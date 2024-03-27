
import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import CartView from './components/CartView'
import OrderView from './components/OrderView'

function App() {
   return (
      <>

      <PizzaProvider>
         <OrderView />
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
         <CartView/>
      </PizzaProvider>
      </>
   )
}

export default App
