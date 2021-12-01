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
            <p>Cuantas mascotas quieres ayudar?</p>
            <p>{contador}</p>
            <button onClick={onVtr}>-</button>
            <button onClick={onAdd}>+</button>
            <button>Ayudar!</button>

            <p>Cliente: {"Hector"}, usted tiene {stock} mascotas disponibles para ayudar.</p>
        </div>
    )
}

export default ItemCount