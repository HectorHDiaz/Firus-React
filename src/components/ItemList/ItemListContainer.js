import { useParams } from "react-router"
import {useState, useEffect} from "react"
import { getMascotas} from "../datos"
import ItemList from "./ItemList"


const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])
    const {estadoId} = useParams()

    useEffect(() =>{
        const listaMascotas = getMascotas(estadoId)
        listaMascotas.then(lista =>{
            setMascotas(lista)
        })
        return(()=>{
            setMascotas([])
        })
    },[estadoId])

    return(
        <div>  
            <ItemList mascotas={mascotas}/>
        </div>
    )
}

export default ItemListContainer