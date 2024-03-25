import { PizzaContext } from './PizzaContext'
import { initialPizzaState } from './PizzaContext'
type PizzaProviderProps = {
   children: React.ReactNode
}

const PizzaProvider = ({ children }: PizzaProviderProps) => {
   return <PizzaContext.Provider value={initialPizzaState}>{children}</PizzaContext.Provider>
}

export default PizzaProvider
