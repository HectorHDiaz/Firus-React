import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () =>{
    const {getCartQty, clearCart} = useContext(CartContext)

    return(
        <div>
            <Link to={"/cart"}><img src={'https://i.imgur.com/B3JYpPP.png'} className="imgStyle" alt="carrito"></img></Link>
            {getCartQty() === 0 ?
                <></>
            :
                <div className="info">
                    <p className='qty' >{getCartQty()}</p>
                    <img alt="tachito" onClick={clearCart} className="tachito" src="../../../public/tachito.png"/>
                </div>
            }
        </div>
    )
}
export default CartWidget