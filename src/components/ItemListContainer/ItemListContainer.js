import React from 'react'
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
import {getMascotas} from "../../services/firebase/firebase"



const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])
    const [loading, setLoading] = useState(true)
    let {estadoId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getMascotas('estado', '==', estadoId).then(items => {
            setMascotas(items)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })

        return(()=>{
            setMascotas([])
        })
    },[estadoId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>  
            <ItemList mascotas={mascotas} id={estadoId}/>
        </div>
    )
}

export default ItemListContainer