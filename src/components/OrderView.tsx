import { useContext, useReducer, useState } from 'react'
import '../sass/components/_orderView.scss'
import { PizzaContext } from './PizzaContext'

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
   const [pizzaSize, dispatch] = useReducer(reducer, 'medium')
   const [activeButton, setActiveButton] = useState('medium')
   const pizzaData = useContext(PizzaContext)

   const handleSizeChange = (size: string) => {
      setActiveButton(size)
      dispatch({ type: size })
   }

   return (
      <div className="pizza-size-selection">
         <div className="size-select-container">
            <p>100 sek</p>
            <button
               className={activeButton === ACTIONS.SMALL ? 'current-size' + ' size-select-button' : ' size-select-button'}
               onClick={() => {
                  handleSizeChange(ACTIONS.SMALL)
               }}
            >
               S
            </button>
         </div>
         <div className="size-select-container">
            <p>120 sek</p>
            <button
               className={activeButton === ACTIONS.MEDIUM ? 'current-size' + ' size-select-button' : ' size-select-button'}
               onClick={() => {
                  handleSizeChange(ACTIONS.MEDIUM)
               }}
            >
               M
            </button>
         </div>
         <div className="size-select-container">
            <p>150 sek</p>
            <button
               className={activeButton === ACTIONS.LARGE ? 'current-size' + ' size-select-button' : ' size-select-button'}
               onClick={() => {
                  handleSizeChange(ACTIONS.LARGE)
               }}
            >
               L
            </button>
         </div>
      </div>
   )
}

export default OrderView
