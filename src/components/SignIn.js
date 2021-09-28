import React from 'react'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {login } from '../firebase.js'
import Button from '@mui/material/Button';
import { signInWithPopup } from '@firebase/auth';





function SignIn() {
    function signInWithGoogle(){
    
        const provider  = new firebase.auth.GoogleAuthProvider()
        signInWithPopup(login, provider)
        
    }
    return (
        <div>
           <Button onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
    )
}

export default SignIn
 
