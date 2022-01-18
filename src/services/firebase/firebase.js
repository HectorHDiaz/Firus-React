import * as firebase from 'firebase/app'
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)

export function getMascotas(key, operator, value){
  return new Promise((resolve, reject)=>{
    const collectionQuery = (key && operator && value) ? query(collection(db,'mascotas'), where(key,operator,value)) : collection(db, 'mascotas')
    getDocs(collectionQuery).then(querySnapshot => {
      const mascotas = querySnapshot.docs.map(mascot => {
        return {id: mascot.id, ...mascot.data()}
      })
      resolve(mascotas)
    }).catch(error => {
      reject(error)
    })
  })
}

export function getMascota(id){
  return new Promise ((resolve, reject)=>{
    getDoc(doc(db, 'mascotas', id)).then((querySnapshot)=>{
      if(querySnapshot._document){
        const mascota = {id: querySnapshot.id, ...querySnapshot.data()}
        resolve(mascota)
      }else{
        reject(null)
      }
    })
  })
}