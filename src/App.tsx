
import IngredientsBox from './components/IngredientsBox'
import PizzaProvider from './components/PizzaProvider'
import CartView from './components/CartView'
import OrderView from './components/OrderView'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App() {

   const [showOrderView,setShowOrderView] = useState(true);

   const changeOrderView = (bool:boolean) => {
      console.log("hej")
      setShowOrderView(bool);
   }


   return (
      <>
      <PizzaProvider>
         <Header onChangeOrderView = {changeOrderView}/>
         {showOrderView? <OrderView/>:
         <CartView onChangeOrderView = {changeOrderView}/>} 
   
         <Footer showOrderView = {showOrderView} onChangeOrderView = {changeOrderView}/>
      </PizzaProvider>
      </>
   )
}

export default App
