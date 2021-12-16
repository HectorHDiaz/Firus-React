import React, {useState} from 'react'
import "./itemCount.scss"

const ItemCount = ({initial, max, cartAdd}) =>{
    const [contador, setContador] = useState(initial)

    const onAdd = () =>{
        if(contador < max){
            setContador(contador+1)
        }
    }
    const onVtr = () =>{
        if(contador > initial){
            setContador(contador-1)
        }
    }

    return(
        <div className="itemCount">
            <p>Cuantas ayudas quieres dar?</p>
            <div className="main">
                <button onClick={onVtr}>-</button>
                <p>{contador}</p>
                <button onClick={onAdd}>+</button>
            </div>
            <button className="btn btn-success" onClick={()=>cartAdd(contador)}>Ayudar!</button>
        </div>
    )
}

export default ItemCount