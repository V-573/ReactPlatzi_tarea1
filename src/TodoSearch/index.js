import React from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';
function TodoSearch() {  //en esta parte recibo las props enviadas desde el componente padre y las desestructuro usando lo parentesis de lo contrario tocaria usar: props.searchvalue, props.setSearchValue


    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return <input // aca con < escribo en formato de React y al imput le doy un valor inicial con el prop Value pero 
        placeholder="Cortar Cebolla"// con el prop onChange uso la funcion con la que actualizo el valor 
        className="TodoSearch"// del estado. 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
         }}
    
    />;
}

export { TodoSearch };
