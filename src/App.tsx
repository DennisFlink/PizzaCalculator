import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import Header from './components/Header'
import Footer from './components/Footer'

import CartView from './components/CartView'

function App() {
   return (
      <>
      <Header />

      <PizzaProvider>
         <IngredientsBox type="sauce" />
         <IngredientsBox type="cheese" />
         <IngredientsBox type="toppings" />
         <CartView/>
      </PizzaProvider>
      <Footer />
      
      </>
   )
}

export default App
