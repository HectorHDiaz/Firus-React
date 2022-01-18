import React from 'react'
import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
import {getMascotas} from "../../services/firebase/firebase"



const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])
    const [loading, setLoading] = useState(true)
    let {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getMascotas('estado', '==', categoryId).then(mascot => {
            setMascotas(mascot)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })

        return(()=>{
            setMascotas([])
        })
    },[categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <>
        {
            mascotas.length ? 
                <div><ItemList mascotas={mascotas} category={categoryId}/></div>  
            :
                <div><h1>Sección incorrecta! Por favor, intenté buscar otra sección</h1></div>
        }
        
        </>
    )
}

export default ItemListContainer