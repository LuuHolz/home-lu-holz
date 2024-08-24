import { useState } from "react";

const Search = () => {
    const [ searchProduct, setSearchProduct ] = useState();

  return (
    <div className="container-search">
        <input
         type="text" 
         className="input-search"
         placeholder="Buscar producto"
         value={ searchProduct }
         onChange={(e) => setSearchProduct(e.target.value)}
        />

        <button className="iconSearch">X</button>
    </div>
  )
}

export  { Search }