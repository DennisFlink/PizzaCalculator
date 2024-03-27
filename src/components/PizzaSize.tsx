import { useContext } from 'react'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'

const ACTIONS = {
   SMALL: 'small',
   MEDIUM: 'medium',
   LARGE: 'large',
}

const PizzaSize = () => {
   const { size, changeSize, dispatch, setCurrentPizza } = useContext(PizzaContext)
   const handleSizeChange = (newSize: string) => {
      const currentPizza = setCurrentPizza()
      changeSize(newSize)
      dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, size: newSize } })
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

export default PizzaSize
