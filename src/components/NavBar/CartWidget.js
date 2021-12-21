import React, {useContext} from 'react'
import CartContext from '../context/CartContext'

const CartWidget = () =>{
    const { getCartQty, clearCart} = useContext(CartContext)

    const imgStyle = {
        width: '50px',
        marginRight:'30px'
    }

    return(
        <div>
            <img src={'https://i.imgur.com/B3JYpPP.png'} style={imgStyle} alt="carrito"></img>
            <p style={{color: 'white'}} >{getCartQty()}</p>
            <p style={{color: 'white'}} onClick={clearCart}>X</p>
        </div>
    )
}
export default CartWidget