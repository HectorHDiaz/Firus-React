import React, {useState, useContext, useRef} from 'react'
import {Link} from 'react-router-dom'
import { collection, addDoc,Timestamp} from 'firebase/firestore'

import {db} from '../../services/firebase/firebase'
import CartContext from '../../context/CartContext'
import ContactForm from '../ContactForm/ContactForm'
import CartItem from '../CartItem/CartItem'
import Togglable from '../Togglable/Togglable'


export default function CartContainer() {
    const contactFormRef = useRef()
    const {itemsCart, clearCart, getTotal} = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        email: '',
        name: ''
    })

    function confirmOrder(){
        setProcessingOrder(true)

        const objOrder = {
            buyer: contact,
            items: itemsCart,
            date: Timestamp.fromDate(new Date()),
            total: getTotal(),
            estado: "Generada"
        }
        addDoc(collection(db, 'orders'), objOrder).then(({id}) => { 
            setOrderId(id)
        }).finally(() => {
            setProcessingOrder(false)
            clearCart()
        })
    }

    if(orderId){
        return (<>
        <h1>Muchas gracias por su ayuda! </h1>
        <h2>Su comprobante de pago es:</h2>
        <h1 style={{color:'#5fbfff',fontWeight: '400'}}>{orderId}</h1>
        <Link to="/"><button type="button" style={{marginTop: "3em"}} className="button cart_button_checkout">Volvé a ayudar!</button></Link>
        </>)
    }

    if(processingOrder) {
        return <h3>Se esta procesando su orden</h3>
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
            <>
                {(!processingOrder && contact.phone !== '' && contact.address !== '' && contact.comment !== '') &&
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Email: {contact.email}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} className='btn' style={{backgroundColor: '#db4025', color:'#fafafa'}}>Borrar datos de contacto</button>
                    </div>    
                }
                {(!processingOrder && itemsCart.length) > 0 && 
                    <Togglable buttonLabelShow={(contact.phone !== '' && contact.email !== '' && contact.name !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                        <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                    </Togglable> }
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
                                        <button type="button" className="btn btn-danger" onClick={()=>clearCart()}>Vaciar Carrito</button>
                                    <button type="button" className="btn btn-success" onClick={confirmOrder}>Confirmar Compra</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )   
    }
}
