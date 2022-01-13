import React, {useState} from 'react';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
   
    const [itemsCart, setItemsCart] = useState([]); 

    function getTotal(){
       return itemsCart.reduce((total, item)=>{return (total + (item.qty * item.donacion))}, 0)
    }
    
    function isInCart(id){
        return itemsCart.some((item)=>{
            return item.id === id
        })
    }
    function addItem(mascota, qty){
        if(isInCart(mascota.id)){
            setItemsCart(itemsCart.map((item)=>{
                if(item.id === mascota.id){
                    item.qty+= qty
                }
                return item
            }))
        }else{
            setItemsCart([...itemsCart, {...mascota, qty}])
        }
    }
    function removeItem(mascota){
        if(isInCart(mascota.id)){
            setItemsCart(itemsCart.filter(item => item.id !== mascota.id))
        }
    }
    function getCartQty(){
        return itemsCart.reduce((total, item)=>{
            return (total + item.qty)
        }, 0)
    }
    function clearCart(){
        return setItemsCart([])
    }

    return(
        <Context.Provider value={{itemsCart, addItem, isInCart, getCartQty, clearCart, removeItem, getTotal}}>
            {children}
        </Context.Provider>
    )
}
export default Context
