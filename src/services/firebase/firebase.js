import * as firebase from 'firebase/app'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)

export function getMascotas(key, operator, value){
  return new Promise((resolve, reject)=>{
    const collectionQuery = (key && operator && value) ? query(collection(db,'mascotas'), where(key,operator,value)) : collection(db, 'mascotas')

    getDocs(collectionQuery).then(querySnapshot => {
      const mascotas = querySnapshot.docs.map(mascota => {
        return {id: mascota.id, ...mascota.data()}
      })
      resolve(mascotas)
    }).catch(error => {
      reject('Error obteniendo productos: ', error)
    })
  })
}