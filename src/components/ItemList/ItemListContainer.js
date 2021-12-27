import { useParams } from "react-router"
import {useState, useEffect} from "react"
import ItemList from "./ItemList"

import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from '../../services/firebase/firebase'


const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])
    const {estadoId} = useParams()

    useEffect(() =>{
        if(!estadoId){
            getDocs(collection(db,'mascotas')).then((querySnapshot)=>{
                const mascotas = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                    })
                    setMascotas(mascotas)
                }).catch((error)=>{
                    console.log("Error looking for Mascotas")
                }).finally(console.log("All done"))
    
            return(()=>{
                setMascotas([])
            })
        
        }else{
            getDocs(query(collection(db, 'mascotas'), where('estado', '==', estadoId)))
            .then((querySnapshot)=>{
                const mascotas = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                    })
                    setMascotas(mascotas)
                }).catch((error)=>{
                    console.log("Error looking for Mascotas")
                }).finally(console.log("All done"))
        }
    },[estadoId])
    

    return(
        <div>  
            <ItemList mascotas={mascotas}/>
        </div>
    )
}

export default ItemListContainer