import PizzaProvider from './components/PizzaProvider'
import OrderView from './components/OrderView'
function App() {
   return (
      <PizzaProvider>
         <OrderView />
      </PizzaProvider>
   )
}

export default App
