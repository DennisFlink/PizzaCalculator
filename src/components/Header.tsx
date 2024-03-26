import { useState } from 'react'

const Header = () => {
   const [cartOpen, setCartOpen] = useState(false)
   console.log(cartOpen)
   const [changeOrder, setChangeOrder] = useState(false)

   return (
      <>
         {!cartOpen ? (
            <div>
               <h1> Pizzakalkylator</h1>
               <button onClick={() => setCartOpen(true)}>
                  <img src="" alt="" />
               </button>
            </div>
         ) : changeOrder ? (
            <div>
               <h1> Pizzan som det är</h1>;<button onClick={() => setChangeOrder(true)}>kryss</button>
            </div>
         ) : (
            <div>
               <button onClick={() => setCartOpen(false)}>
                  <img src="" alt="" />
               </button>
               <h1>Pizzakalkylator</h1>
            </div>
         )}
      </>
   )
}

export default Header
