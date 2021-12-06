

const ItemDetail = ({mascota}) => {

return(

    <div class="card-group d-flex justify-content-around">
        <img src={mascota.imagen}/>
        <p>{mascota.nombre}</p>
        <p>{mascota.especie}</p>
        <p>{mascota.descripcion}</p>
    </div>
)

}

export default ItemDetail;