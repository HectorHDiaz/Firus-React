import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./itemCount.scss"

const ItemCount = ({initial, stock}) =>{
    const [contador, setContador] = useState(initial)

    const onAdd = () =>{
        if(contador < stock){
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
            <Link to={"/"}><button>Ayudar!</button></Link>
        </div>
    )
}

export default ItemCount