import React from 'react'
import {login} from '../firebase.js'
import Button from '@mui/material/Button'

function SignOut() {
    const logOut = () =>{
        login.signOut();
    }
    return (
        <div>
            <Button onClick ={logOut}>
                SignOut
            </Button>
        </div>
    )
}

export default SignOut
