import ItemCount from "../ItemCount";

const ItemDetail = ({mascota}) => {

return(

    <div className="card-group d-flex justify-content-around">
        <img alt="" src={mascota.imagen}/>
        <p>{mascota.nombre}</p>
        <p>{mascota.especie}</p>
        <p>{mascota.descripcion}</p>
        <ItemCount initial={1} stock={14}/> 
    </div>
)

}

export default ItemDetail;