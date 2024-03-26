import PizzaProvider from './components/PizzaProvider'
import Header from './components/Header'
import Button from './components/Button'

function App() {
   return (
      <>
      <Header />

      <PizzaProvider>
         <h1>pizza :D</h1>
      </PizzaProvider>
      <Button />
      </>
   )
}

export default App
