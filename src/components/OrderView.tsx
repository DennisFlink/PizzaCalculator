import { useContext } from 'react'
import '../sass/components/_orderView.scss'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

const ACTIONS = {
   SMALL: 'small',
   MEDIUM: 'medium',
   LARGE: 'large',
}

const OrderView = () => {
   const { size, changeSize, state, dispatch } = useContext(PizzaContext)
   /* const [activeButton, setActiveButton] = useState(state.pizzas[state.pizzas.length - 1].size) */
   const handleSizeChange = (newSize: string) => {
      changeSize(newSize)
      const index = state.pizzas.length - 1
      dispatch({ type: ACTION.EDIT, payload: { ...state.pizzas[index], size: newSize } })
   }

   return (
      <div className="pizza-size-selection">
         <div className="size-select-container">
            <p>100 sek</p>
            <button
               className={size === ACTIONS.SMALL ? 'current-size' + ' size-select-button' : ' size-select-button'}
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
               className={size === ACTIONS.MEDIUM ? 'current-size' + ' size-select-button' : ' size-select-button'}
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
               className={size === ACTIONS.LARGE ? 'current-size' + ' size-select-button' : ' size-select-button'}
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
