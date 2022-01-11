import Item from "../Item/Item"
import "./ItemList.scss"

const ItemList = (props) => {

return(

    <div >
        {(props.id === 'Todos') ?
            <h1 className="title">Bienvenido a Firus</h1>
            :
            <></>
        }
        <h2 className="seconTitle">{props.id}</h2>
        <div className="card-group d-flex justify-content-around">
            {props.mascotas.map(mascot => <Item key={mascot.id} mascota={mascot}/>)}
        </div>
    </div>
)

}

export default ItemList;