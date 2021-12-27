import {useState, useEffect} from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getDoc, doc} from "firebase/firestore"
import {db} from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [mascota, setMascota] = useState([])
    const {mascotaId} = useParams()
    
    useEffect(() =>{

        getDoc(doc(db, 'mascotas', mascotaId)).then((querySnapshot)=>{
            const mascota = {id: querySnapshot.id, ...querySnapshot.data()}
            setMascota(mascota)
        }).catch((error)=>{
            console.log("Error looking for Mascotas")
        }).finally(console.log("All done"))
        
    },[mascotaId])

    return(
        <div>    
           <ItemDetail mascota={mascota}/>
        </div>
    )
}

export default ItemDetailContainer