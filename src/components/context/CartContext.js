import React, {useState, useEffect, useContext} from 'react';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
   
    const [itemsCart, setItemsCart] = useState([]); 
    
    function isInCart(id){
        return itemsCart.some((item) => {
            return item.id === id
        })
    }
    function addItem(item, qty){
        setItemsCart([...itemsCart, {...item, qty}])
    }
    function removeItem(id){
        setItemsCart()
    }
    function getCartQty(){
        return itemsCart.reduce((total, item)=>{
            return (total + item.qty)
        }, 0)
    }
    function clearCart(){
        return setItemsCart([   ])
    }

    return(
        <Context.Provider value={{itemsCart, addItem, isInCart, getCartQty, clearCart, removeItem}}>
            {children}
        </Context.Provider>
    )
}
export default Context
