
import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import CartView from './components/CartView'
import OrderView from './components/OrderView'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
   return (
      <>

      <PizzaProvider>
         <Header/> 
         <OrderView/>
         <CartView/>
         <Footer/>
      </PizzaProvider>
      </>
   )
}

export default App
