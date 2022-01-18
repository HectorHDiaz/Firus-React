import Item from "../Item/Item"
import "./ItemList.scss"

const ItemList = (props) => {

return(
    <div >
        {props.category === undefined ?
            <>
            <h1 className="title">Bienvenido a Firus!</h1>
            <h2>La web para ayudar y donar a mascotas necesitadas.</h2>
            </>
            :
            <></>
        }
        <h2 className="secondTitle">{props.category}</h2>
        <div className="card-group d-flex justify-content-around">
            {props.mascotas.map(mascot => <Item key={mascot.id} mascota={mascot}/>)}
        </div>
    </div>
    )
}

export default ItemList;