import React, { useState, useEffect } from 'react'
// import firebase from 'firebase/compat/app';
import SignOut from './SignOut';
import { login, db } from '../firebase';
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import SendMessage from './SendMessage';
import axios from 'axios'

import './chat.css';

import { Card, Button } from 'react-bootstrap';

function Chat() {

    const [user] = useAuthState(login);
    const [messages, getMessages] = useState([])
    const [users, getUsers] = useState([])



    useEffect(() => {
        const q = query(collection(db, 'messages'))
        const querysnap = query(q, orderBy('createdAt'))
        const unsubscribe = onSnapshot(querysnap, (snapshot) => {
            getMessages(snapshot.docs.map(doc => doc.data()))
        })


        // const fetchUsers = async () => {
        //     const response = await axios(`https://yts.mx/api/v2/list_movies.json`)
        //     // getUsers(response.data)
        //     // console.log(response.data.data.movies)
        //     const res = (response.data)
        //     const movies = (res.data.movies)
        //     console.log(movies)
        //     getUsers(movies)
        // };

        // fetchUsers();

    }, [])




    if (user) {
        return (

            <div class="col-5 px-0">

                <SignOut />

                {/* {users.map((movie) => (
                     <Card style={{ width: '18rem' }}> */}
                    {/* <Card.Img variant="top" src={movie.ba} /> */}
                    {/* <Card.Body>
                        <Card.Title>{movie.title_long}</Card.Title>
                        <Card.Text>
                           {movie.summary}
                        </Card.Text>
                        <Button variant="primary">{movie.year}</Button>
                    </Card.Body>
                </Card> */}

                {/* ))} */}
               

                <div className="msgs">
                    {messages.map(({
                        id,
                        text,
                        photoURL,
                        uid }) => (
                        <div>
                            <div key={id} className={`msg ${uid === login.currentUser.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt="" />
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <SendMessage />




            </div>
        )
    }

}

export default Chat




const getOneUserData = async () => {

    const resp =  await axios({
        url:'sajdhaskd.com',
        params: {
            id: '12321',
            method:'get',
            firstname: 'asdsad'

        }
    })
   
    .then(resp =>{
        console.log(resp.data)
    })
    .cath(err => {
        console.log(err.resp)
    })


}

 

<button onClick= {getOneUserData}> click me </button>