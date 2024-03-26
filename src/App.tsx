import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import { Ingredients } from './components/PizzaContext'
import OrderView from './components/OrderView'
import Header from './components/Header'
import Button from './components/Button'

function App() {
   return (
      <>
      <Header />

      <PizzaProvider>
         <OrderView />
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
      </PizzaProvider>
      <Button />
      </>
   )
}

export default App
