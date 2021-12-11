import {useState, useEffect} from "react"
import { useParams } from "react-router"
import { getMascota } from "../datos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [mascota, setMascota] = useState([])
    const {mascotaId} = useParams()
    
    useEffect(() =>{
        const laMascota = getMascota(mascotaId)
        laMascota.then(mascota =>{
            setMascota(mascota)
        })
    },[mascotaId])

    return(
        <div>    
           <ItemDetail mascota={mascota}/>
        </div>
    )
}

export default ItemDetailContainer