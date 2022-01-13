import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () =>{
    const { getCartQty, clearCart} = useContext(CartContext)

    const imgStyle = {
        width: '50px',
        marginRight:'30px'
    }

    return(
        <div>
            <Link to={"/cart"}><img src={'https://i.imgur.com/B3JYpPP.png'} style={imgStyle} alt="carrito"></img></Link>
            {getCartQty() === 0?
            <></>
            :
            <>
            <p style={{color: 'white'}} >{getCartQty()}</p>
            <p style={{color: 'white'}} onClick={clearCart}>x</p>
            </>
            }
        </div>
    )
}
export default CartWidget