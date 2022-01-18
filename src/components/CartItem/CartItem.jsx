import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './CartItem.css'


function CartItem({mascota}) {

    const {removeItem} = useContext(CartContext)

    return (<>
        <li className="cart_item clearfix" key={mascota.id}>
            <div className="cart_item_image"><img src={mascota.imagen} alt={mascota.descripcion}/></div>
            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                <div className="cart_item_name cart_info_col">
                    <div className="cart_item_title">Mascota</div>
                    <div className="cart_item_text">{mascota.nombre}</div>
                </div>
                <div className="cart_item_color cart_info_col">
                    <div className="cart_item_title">Especie</div>
                    <div className="cart_item_text">{mascota.especie}</div>
                </div>
                <div className="cart_item_quantity cart_info_col">
                    <div className="cart_item_title">Cantidad Ayudas</div>
                    <div className="cart_item_text">{mascota.qty}</div>
                </div>
                <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Precio</div>
                    <div className="cart_item_text">{mascota.donacion}</div>
                </div>
                <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">SubTotal</div>
                    <div className="cart_item_text">{mascota.donacion * mascota.qty}</div>
                </div>
                <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Eliminar</div>
                    <div className="cart_item_text" onClick={()=>removeItem(mascota)}><img alt="tachito" style={{width:"30px"} }src="https://image.flaticon.com/icons/png/512/40/40002.png"/></div>
                </div>
            </div>
        </li>
        </>
    )
}
export default CartItem