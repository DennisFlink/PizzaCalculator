import { IngredientsBox } from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import OrderView from './components/OrderView'
function App() {
   return (
      <PizzaProvider>
         <IngredientsBox />
      </PizzaProvider>
   )
}

export default App
