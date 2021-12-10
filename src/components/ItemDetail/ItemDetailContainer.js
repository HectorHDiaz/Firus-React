import { getMascota } from "../datos"
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"

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
        <div className="ItemDetailContainer">    
           <ItemDetail mascota={mascota}/>
        </div>
    )
}

export default ItemDetailContainer