import SignIn from "./components/SignIn";
import Chat from './components/Chat';
import {login} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';


function App() {

  const [user] = useAuthState(login)

  return (
    <div className="App">
      {user ? <Chat/> :  <SignIn/>}
    
    </div>
  );
}

export default App;
