import { useReducer, useState } from 'react'
import '../sass/components/_orderView.scss'
import { PizzaContext } from './PizzaContext'
import { useContext } from 'react'

const ACTIONS = {
   SMALL: 'small',
   MEDIUM: 'medium',
   LARGE: 'large',
}

type PizzaSize = 'small' | 'medium' | 'large'

const reducer = (pizzaSize: PizzaSize, action: any) => {
   switch (action.type) {
      case ACTIONS.SMALL:
         return 'small'
      case ACTIONS.MEDIUM:
         return 'medium'
      case ACTIONS.LARGE:
         return 'large'
      default:
         return pizzaSize
   }
}

const OrderView = () => {
   const [pizzaSize, dispatch] = useReducer(reducer, 'medium') // Initial state should be a string
   const [activeButton, setActiveButton] = useState('medium')
   const pizza = useContext(PizzaContext)

   const handleSizeChange = (size: string) => {
      setActiveButton(size)
      dispatch({ type: size })
   }

   return (
      <div className="pizza-size-selection">
         <button
            className={activeButton === ACTIONS.SMALL ? 'current-size' : 'active'} // Corrected comparison operator
            onClick={() => {
               handleSizeChange(ACTIONS.SMALL)
            }}
         >
            S
         </button>
         <button
            className={activeButton === ACTIONS.MEDIUM ? 'current-size' : 'active'} // Corrected comparison operator
            onClick={() => {
               handleSizeChange(ACTIONS.MEDIUM)
            }}
         >
            M
         </button>
         <button
            className={activeButton === ACTIONS.LARGE ? 'current-size' : 'active'} // Corrected comparison operator
            onClick={() => {
               handleSizeChange(ACTIONS.LARGE)
            }}
         >
            L
         </button>
      </div>
   )
}

export default OrderView
