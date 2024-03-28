import { useContext, useState } from 'react'
import Button from './Button'
import { PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider'
import uuid from 'react-uuid'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FooterProp = {
   showOrderView: boolean
   onChangeOrderView: (bool: boolean) => void
}

const Footer = ({ showOrderView, onChangeOrderView }: FooterProp) => {
   const [isToastActive, setIsToastActive] = useState(false)
   const { setCurrentPizza, dispatch, changeSize, editMode, changeEditMode, state, changeCartOpen } = useContext(PizzaContext)
   const currentPizza = setCurrentPizza()

   const handleButtonClick = (message: string) => {
      showToastMessage(message, 600)
      if (!editMode.editMode) {
         dispatch({ type: ACTION.EDIT, payload: { ...currentPizza, done: true } })
         dispatch({ type: ACTION.ADD, payload: { id: uuid(), size: 'medium', sauce: [], cheese: [], toppings: [], totalCost: { sizeCost: 100, ingredientsCost: 0 }, done: false } })
         changeSize('medium')
      } else {
         dispatch({ type: ACTION.EDIT, payload: currentPizza })
         changeEditMode(false, '')
      }
   }
   const showToastMessage = (message: string, autoClose: number | false) => {
      setIsToastActive(true)
      toast.success(`${message}`, {
         position: 'bottom-center',
         autoClose: autoClose,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         onClose: () => setIsToastActive(false),
         theme: 'light',
         style: {
            height: '8rem',
            fontSize: '20px',
            width: '100%',
         },
      })
   }
   const clearCart = () => {
      state.pizzas.filter((p) => p.done === true).map((c) => dispatch({ type: ACTION.REMOVE, payload: c }))
   }

   let cartTotal = 0
   state.pizzas.filter((p) => p.done === true).map((price) => (cartTotal += price.totalCost.ingredientsCost + price.totalCost.sizeCost))

   return (
      <footer>
         <section>
            {!editMode.editMode && showOrderView /* <p> {pizzaPrice} </p> */ ? (
               <>
                  <p>BELOPP</p>
                  <p className="price">{currentPizza.totalCost.ingredientsCost + currentPizza.totalCost.sizeCost} SEK</p>
                  <Button
                     className="button"
                     onClick={() => {
                        handleButtonClick('Pizza Added 🍕')
                     }}
                     label="Lägg till"
                     disabled={isToastActive}
                  ></Button>
               </>
            ) : !showOrderView ? (
               <>
                  <p>BELOPP</p>
                  <p className="price">{cartTotal} SEK</p>
                  <Button
                     className="button"
                     onClick={() => {
                        onChangeOrderView(true), changeEditMode(false, ''), changeCartOpen(false)
                        clearCart()
                        showToastMessage('Thank you for your order 😍', false)
                     }}
                     label="Beställ"
                     disabled={state.pizzas.length <= 1}
                  ></Button>
               </>
            ) : (
               <>
                  <p>BELOPP</p>
                  <p className="price">{currentPizza.totalCost.ingredientsCost + currentPizza.totalCost.sizeCost} SEK</p>
                  <Button
                     className="button"
                     onClick={() => {
                        onChangeOrderView(false), changeEditMode(false, ''), showToastMessage('Pizza updated 👍', 600)
                     }}
                     label="Uppdatera"
                  ></Button>
               </>
            )}
         </section>
      </footer>
   )
}

export default Footer
