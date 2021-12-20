import React, {useState, useEffect, useContext} from 'react';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
   
    const [itemsCart, setItemsCart] = useState([{title:'Item A', qty:3},{title:'Item B', qty:6}]); 
    
    function getCantidad(){
        return itemsCart.reduce((total, item)=>{
            return (total + item.qty)
        }, 0)
    }

    return(
        <Context.Provider value={{itemsCart,setItemsCart, getCantidad}}>
            {children}
        </Context.Provider>
    )
}
export default Context
