import CartView from './components/CartView'
import PizzaProvider from './components/PizzaProvider'

function App() {
   return (
      <PizzaProvider>
         <CartView/>
      </PizzaProvider>
   )
}

export default App
