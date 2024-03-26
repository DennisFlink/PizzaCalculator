import { useState, useContext } from 'react'
import { Pizza, PizzaContext } from './PizzaContext'
import { ACTION } from './PizzaProvider';


type CartItemProps = {
    item: Pizza;
    id: number
};

const CartItem: React.FC<CartItemProps> = ({item, id}) => {
   const [isActive, setIsActive] = useState(false)
   const pizzaData = useContext(PizzaContext)
   
 
   return (
      <div className="cart-item">
            <div className="accordion">
               <div className="accordion-item">
                  <div className="accordion-title">
                    <img src="./assets/close.svg" alt="a cross" onClick={() => pizzaData.dispatch({type: ACTION.REMOVE, payload: item })}/>
                    <img src="./assets/edit.svg" alt="a pen" />
                     <div>Pizza: {id + 1} : {item.size}</div>
                     <div>{item.totalCost} kr</div>
                     <div>
                        {isActive ? (<img className='accordion-inactive' onClick={() => setIsActive(!isActive)} src='./assets/arrow.svg' alt='arrow'/>)
                            : (<img className='accordion-active' onClick={() => setIsActive(!isActive)} src='./assets/arrow.svg' alt='a arrow'/>)
                        }
                    </div>
                  </div>
                  {isActive && <div className="accordion-content">
                    <ul>
                        Sås:
                        {item.sauce.map((sauce, index) => (
                            <li key={index}>{sauce}</li>
                        ))}
                    </ul>
                    <ul>
                        Ost:
                        {item.cheese.map((cheese, index) => (
                            <li key={index}>{cheese}</li>
                        ))}
                    </ul>
                    <ul>
                        Topping:
                        {item.toppings.map((toppings, index) => (
                            <li key={index}>{toppings}</li>
                        ))}
                    </ul>
                </div>}
               </div>
            </div>
      </div>
   )
}

export default CartItem
