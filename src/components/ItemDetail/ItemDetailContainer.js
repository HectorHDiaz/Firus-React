import { getMascota } from "../datos"
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [mascota, setMascota] = useState([])

    useEffect(() =>{
        const unaMascota = getMascota()
        unaMascota.then(mascota =>{
            setMascota(mascota)
        })
        return(()=>{
            setMascota([])
        })
    },[])

    return(
        <div className="ItemDetailContainer">    
            <ItemDetail mascota={mascota}/>
        </div>
    )
}

export default ItemDetailContainer