import { useContext, useState } from 'react'
import '../sass/components/_orderView.scss'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

const ACTIONS = {
   SMALL: 'small',
   MEDIUM: 'medium',
   LARGE: 'large',
}

const OrderView = () => {
   const { state, dispatch } = useContext(PizzaContext)
   const [activeButton, setActiveButton] = useState('medium')

   const handleSizeChange = (size: string) => {
      setActiveButton(size)
      const index = state.pizzas.length - 1
      dispatch({ type: ACTION.EDIT, payload: { ...state.pizzas[index], size: size } })
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
