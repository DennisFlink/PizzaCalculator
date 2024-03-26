type PROP = {
   type: { name: string; price: number }[]
}

const IngridientList: React.FC<PROP> = ({ type }) => {
   return (
      <div className="CONTAINER">
         {type.map((ingrident, index) => (
            <div className="box" key={index}>
               <input type="checkbox" id={ingrident.name}></input>
               <label htmlFor={ingrident.name}>{ingrident.name}</label>
            </div>
         ))}
      </div>
   )
}

export default IngridientList
