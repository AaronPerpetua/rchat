import React, {useState }from 'react'
import {Input,Button} from '@mui/material';
// import { useAuthState } from 'react-firebase-hooks/auth';
import {db, login} from '../firebase'
import {serverTimestamp,addDoc, collection } from "firebase/firestore";
import Chat from '../components/Chat'

function SendMessage() {
    
    const [msg, setMsg] = useState('')  

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = login.currentUser

        await addDoc(collection(db, "messages"), {
            text: msg,
            photoURL: photoURL,
            uid: uid,
            createdAt: serverTimestamp()
          });
    
          setMsg('')
         
    }




    return (
        <div>
            <Chat/>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input  type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button type="submit">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMessage
