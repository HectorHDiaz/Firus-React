import {useState, useEffect} from "react"
import { useParams } from "react-router"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc} from "firebase/firestore"
import {db} from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [mascota, setMascota] = useState([])
    const [loading, setLoading] = useState(true)
    const {mascotaId} = useParams()
    
    useEffect(() =>{

        getDoc(doc(db, 'mascotas', mascotaId)).then((querySnapshot)=>{
            const mascota = {id: querySnapshot.id, ...querySnapshot.data()}
            setMascota(mascota)
        }).catch((error)=>{
            console.log("Error looking for Mascotas" + error)
        }).finally(() => {
            setLoading(false)
        })
        
    },[mascotaId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div>    
           <ItemDetail mascota={mascota}/>
        </div>
    )
}

export default ItemDetailContainer