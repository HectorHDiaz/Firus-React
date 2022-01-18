import React, {useState} from 'react';

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
   
    const [itemsCart, setItemsCart] = useState([]); 

    function getTotal(){
       return itemsCart.reduce((total, mascot)=>{return (total + (mascot.qty * mascot.donacion))}, 0)
    }
    
    function isInCart(mascotaId){
        return itemsCart.some((mascot)=>{
            return mascot.id === mascotaId
        })
    }
    function addItem(mascota, qty){
        if(isInCart(mascota.id)){
            setItemsCart(itemsCart.map((mascot)=>{
                if(mascot.id === mascota.id){
                    mascot.qty+= qty
                }
                return mascot
            }))
        }else{
            setItemsCart([...itemsCart, {...mascota, qty}])
        }
    }
    function removeItem(mascota){
        if(isInCart(mascota.id)){
            setItemsCart(itemsCart.filter(mascot => mascot.id !== mascota.id))
        }
    }
    function getCartQty(){
        return itemsCart.reduce((total, mascot)=>{
            return (total + mascot.qty)
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
