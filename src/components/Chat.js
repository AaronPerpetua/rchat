import React, { useState, useEffect } from 'react'
// import firebase from 'firebase/compat/app';
import SignOut from './SignOut';
import { login, db } from '../firebase';
import { getDocs, collection, query,orderBy, limit  } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
// import SendMessage from './SendMessage';


function Chat() {

    const [user] = useAuthState(login);
    const [messages, getMessages] = useState([])


        const fetchMessages = async () => {

        // const q = query(collection(db, "messages"), where("id", "==", (1)));
        const msgRef = query(collection(db, 'messages'))
        const q = query(msgRef, orderBy("createdAt"), limit(20));
        const querySnapshot = await getDocs(q)
        getMessages(querySnapshot.docs.map(doc => doc.data()))

        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     });
        }

    

    useEffect(() => {
        // db.collection('messages')
        // .orderBy('createAt')
        // .limit(50)
        // .onSnapshot(snapshot =>{
        //     getMessages(snapshot.docs.map(doc => doc.data))
        // })

        // const msgRef = query(collection(db, 'messages'))
        // const q = query(msgRef, orderBy("createdAt"), limit(20));
        // const querySnapshot =  getDocs(q)
        // getMessages(querySnapshot.docs.map(doc => doc.data()))
       
        fetchMessages();

    }, [])

    if (user) {
        return (
            <div className="msgs">
                <SignOut />
            {messages.map(({ id, text, photoURL, uid }) => (
                <div>
                    <div key={id}>
                        {/* <img src={photoURL} alt="" /> */}
                        <p>{text}</p>
                    </div>
                </div>
            ))}
          
        </div>
        )
    }

}

export default Chat
