import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.scss"


const ItemDetail = ({mascota}) => {

const [cart, setCart] = useState(0)

const cartAdd = (cantidad) =>{
    setCart(cantidad)
    console.log(cantidad)
}

return(
    // <div className="card-group d-flex justify-content-around">
    <div className="container">
        <div className="card mb-3" style={{maxWidth: "540px;"}}>
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={mascota.imagen} className="img-fluid rounded-start" alt={mascota.nombre}/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{mascota.nombre}</h5>
                        <p className="card-text">{mascota.descripcion}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{mascota.genero}</li>
                            <li className="list-group-item">{mascota.especie}</li>
                            <li className="list-group-item">{mascota.edad}</li>
                        </ul>
                           { 
                            (!cart)?
                                <ItemCount initial={1} max={20} cartAdd={cartAdd}/> 
                                :
                                <div>
                                    <p>Confirmás donar {cart} ayudas?</p>
                                    <Link to={"/cart"} className="btn btn-primary">Confirmar Ayuda</Link>
                                </div>
                           }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;