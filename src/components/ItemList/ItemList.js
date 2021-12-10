import Item from "../Item/Item"

const ItemList = ({mascotas}) => {

return(

    <div className="card-group d-flex justify-content-around">
        {mascotas.map(mascot => <Item key={mascot.id} mascota={mascot} />)}
    </div>
)

}

export default ItemList;