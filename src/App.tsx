import PizzaProvider from './components/PizzaProvider'
import CartView from './components/CartView'
import OrderView from './components/OrderView'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
function App() {
   const [showOrderView, setShowOrderView] = useState(true)

   const changeOrderView = (bool: boolean) => {
      setShowOrderView(bool)
   }

   return (
      <>
         <PizzaProvider>
            <ToastContainer />
            <Header onChangeOrderView={changeOrderView} />
            {showOrderView ? <OrderView /> : <CartView onChangeOrderView={changeOrderView} />}
            <Footer showOrderView={showOrderView} onChangeOrderView={changeOrderView} />
         </PizzaProvider>
      </>
   )
}

export default App
