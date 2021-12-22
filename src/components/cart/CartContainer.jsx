import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'



export default function CartContainer() {

    const {itemsCart, clearCart} = useContext(CartContext)

    if(itemsCart.length === 0){

        return (
            <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">Shopping Cart</div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                   Aún no tenés Articulos seleccionados!
                                </ul>
                                   <Link to="/"><button type="button" className="button cart_button_checkout">Buscá y ayudá!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }else{
        return (
        <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">Shopping Cart</div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {
                                        itemsCart.map((item)=><CartItem key={item.id} mascota={item}/>)
                                    }
                                </ul>
                            </div>
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">Total:</div>
                                    <div className="order_total_amount">{itemsCart.reduce((total, item)=>{return (total + (item.qty * item.donacion))}, 0)}
                                    </div>
                                </div>
                            </div>
                            <div className="cart_buttons"> 
                                <button type="button" className="button cart_button_clear" onClick={()=>clearCart()}>Vaciar Carrito</button>
                                <Link to="/"><button type="button" className="button cart_button_checkout" onClick={clearCart}>Confirmar Compra</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}
