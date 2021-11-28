import ItemCount from "./ItemCount"

const ItemListContainer = ({nombre,cantidad}) => {

    return(
        <div>
            <p>Cliente: {nombre}, usted tiene {cantidad} productos en el carrito.</p>
            <ItemCount stock={cantidad}/>
        </div>
    )

}

export default ItemListContainer