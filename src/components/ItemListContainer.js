import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { getMascotas } from "./datos"
import {useState, useEffect} from "react"

const ItemListContainer = () => {
    const [mascotas, setMascotas] = useState([])

    useEffect(() =>{
        const listaMascotas = getMascotas()
        listaMascotas.then(lista =>{
            setMascotas(lista)
        })
        return(()=>{
            setMascotas([])
        })
    },[])

    return(
        <div className="ItemListContainer">
            <ItemCount initial={1} stock={14}/>    
            <ItemList mascotas={mascotas}/>
        </div>
    )
}

export default ItemListContainer