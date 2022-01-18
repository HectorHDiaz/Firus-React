import { Link } from "react-router-dom"
import "./Item.scss"

const Item = ({mascota}) => {

    return (
        <Link to={`/item/${mascota.id}`}>
            <div className="col mb-4" mascota={mascota}>
                <div key={mascota.id} className="card card1" style={{backgroundImage: `url(${mascota.imagen})`}}>
                    <div className="cardHead">
                        <div className="cardHead__title">
                            <h5 className="card-title">{mascota.nombre}</h5>
                        </div>
                        <div className="cardHead__badge">
                            <span className={`badge badge-${mascota.estado}`}>{mascota.estado}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item