import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss"

const ItemDetail = ({mascota}) => {

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
                        <Link to={`/category/${mascota.estado}`} className="card-link">Ayudar</Link>
                        <ItemCount initial={1} stock={14}/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;