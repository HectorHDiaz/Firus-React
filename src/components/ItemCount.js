import React, {useState} from 'react'

const ItemCount = ({stock}) =>{
    const [contador, setContador] = useState(1)

    const onAdd = () =>{
        if(contador < stock){
            setContador(contador+1)
        }
    }
    const onVtr = () =>{
        if(contador > 0){
            setContador(contador-1)
        }
    }

    return(
        <div className="itemCount">
            <p>Cuantos quieres agregar?</p>
            <p>{contador}</p>
            <button onClick={onVtr}>-</button>
            <button onClick={onAdd}>+</button>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount