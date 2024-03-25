import { IngredientsBox } from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'

function App() {
   return (
      <PizzaProvider>
         <IngredientsBox />
      </PizzaProvider>
   )
}

export default App
