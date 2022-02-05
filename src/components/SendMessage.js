import React, {useState }from 'react'
import {Input,Button} from '@mui/material';
// import { useAuthState } from 'react-firebase-hooks/auth';
import {db, login} from '../firebase'
import {serverTimestamp,addDoc, collection } from "firebase/firestore";


function SendMessage() {
    
    const [msg, setMsg] = useState('')  

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL,displayName } = login.currentUser

        await addDoc(collection(db, "messages"), {
            discordname: displayName,
            photoURL: photoURL,
            uid: uid,
            createdAt: serverTimestamp()
          });
    
          setMsg('')
         
    }




    return (
        <div>
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
