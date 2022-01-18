import {useState, useEffect} from "react"
import { useParams } from "react-router"
import {getMascota} from '../../services/firebase/firebase'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {mascotaId} = useParams()
    const [mascota, setMascota] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        getMascota(mascotaId).then(result=>{
            setMascota(result)
        }).catch((error)=>{
            setMascota(error)
        }).finally(() => {
            setLoading(false)
        })
        
    },[mascotaId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <>
        {mascota ?
        <div><ItemDetail mascota={mascota}/></div>
        :
        <div><h1>Selección de Mascota incorrecta! Por favor, intenté buscar otro mascota</h1></div>
        }
        </>
    )
}

export default ItemDetailContainer