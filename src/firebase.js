import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import 'firebase/compat/auth'



const firebaseApp = initializeApp ({
    apiKey: "AIzaSyDRaYlOEEPz9zYPnJ9NCXwKAm5OdJjMSVg",
    authDomain: "mychat-8f27a.firebaseapp.com",
    projectId: "mychat-8f27a",
    storageBucket: "mychat-8f27a.appspot.com",
    messagingSenderId: "14527579100",
    appId: "1:14527579100:web:ca97d03e7fc9f511120519",
    measurementId: "G-K381M8S4CL"

})

const db = getFirestore(firebaseApp);

const login = getAuth(firebaseApp)

export {db, login}

