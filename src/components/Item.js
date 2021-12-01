const Item = ({mascota}) => {

    return (
        <div mascota={mascota}>
            <div className="card" style={{width: "300px"}}>
                <img src={mascota.imagen} className="card-img-top" alt={mascota.id}/>
                <div className="card-body">
                    <h5 className="card-title">{mascota.nombre}</h5>
                    <p className="card-text">{mascota.descripcion}</p>
                    <a href="#" className="btn btn-primary">{mascota.estado}</a>
                </div>
            </div>  
        </div>
    )

}

export default Item