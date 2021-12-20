import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import "./ItemDetail.scss"
import NotificationContext from "../context/NotificationContext";

const ItemDetail = ({mascota}) => {

const {setNotification} = useContext(NotificationContext)


const [cart, setCart] = useState(0)
const cartAdd = (cantidad) =>{
    setCart(cantidad)
    console.log(setNotification(`Agregado a ${cantidad} de ayudas`, 'success'))
}

return(
    // <div className="card-group d-flex justify-content-around">
    <div className="container">
        <div className="card mb-3" style={{maxWidth: "100vw"}}>
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
                            <ItemCount initial={1} max={20} cartAdd={cartAdd}/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;