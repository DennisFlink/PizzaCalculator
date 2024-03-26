import  { useState, useReducer } from 'react';

const Button = () => {
 

  return (
    <>
   {cartOpen ?(
    <div>
    <button className= "buy">Beställ</button>
    </div>
   ): changeOrder ?(
    <div>
    <button className="update">Uppdatera</button>
    </div>
   ): 
   <div>
    <button className="add"> Lägg till</button> 
    </div>

  }
  </>
  );
};    

export default Button;