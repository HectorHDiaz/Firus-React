import ItemList from "./ItemList"
import { getEstadoList} from "../datos"
import {useState, useEffect} from "react"
import { useParams } from "react-router"


const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])
    const {estadoId} = useParams()

    useEffect(() =>{
        const listaMascotas = getEstadoList(estadoId)
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