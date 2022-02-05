import React from 'react'
import SignIn from "./components/SignIn";
import Chat from './components/Chat';
import { login } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import { Container} from 'react-bootstrap';
import Products from './components/Products';



function App() {

  const [user] = useAuthState(login)

  return (
    <React.Fragment>

      <Container>
        <NavBar/>
        {user ? <Chat /> : <SignIn />}
       {/* <Products/> */}
      </Container>
     
      
    </React.Fragment>
  );
}

export default App;
