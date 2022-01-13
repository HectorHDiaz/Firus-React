import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {db} from '../../services/firebase/firebase'
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc } from 'firebase/firestore'


export default function CartContainer() {
    const [processingOrder, setProcessingOrder] = useState(false)
    const {itemsCart, clearCart, getTotal} = useContext(CartContext)

    function confirmOrder(){
        setProcessingOrder(true)

        const objOrder = {
            buyer: {name: 'Hector Diaz',phone: '11 2252-6521', email: 'atonomo.4s@gmail.com'},
            items: itemsCart,
            date: Timestamp.fromDate(new Date()),
            total: getTotal(),
        }
        
        addDoc(collection(db, 'orders'), objOrder).then(({id})=>{console.log(id)})
    }


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
                                    <div className="order_total_amount">{getTotal()}
                                    </div>
                                </div>
                            </div>
                            <div className="cart_buttons"> 
                                <button type="button" className="button cart_button_clear" onClick={()=>clearCart()}>Vaciar Carrito</button>
                               <button type="button" className="button cart_button_checkout" onClick={confirmOrder}>Confirmar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}
