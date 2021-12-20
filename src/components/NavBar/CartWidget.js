import React, {useContext} from 'react'
import CartContext from '../context/CartContext'

const CartWidget = () =>{
    const { getCantidad } = useContext(CartContext)

    const imgStyle = {
        width: '50px',
        marginRight:'30px'
    }

    return(
        <div>
            <img src={'https://i.imgur.com/B3JYpPP.png'} style={imgStyle} alt="carrito"></img>
            <p style={{color: 'white'}} >{getCantidad()}</p>
        </div>
    )
}
export default CartWidget