
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Signup from './Signup';
import { useEffect,useState } from 'react';
import Login from './Login';
import SignIn from './Ketan_Login';
import LogIn from './Ketan_Login';
import FrameComponent from './LoginComponent';

function Authen() {

  const auth= getAuth();
  const [user, setuser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log("You are logged in",user);
            setuser(user)
        }else{
            console.log("you are logged out");
            setuser(null)
        }
    })
},[]);

if(user===null){
  return (
    <div className="App">
    <LogIn></LogIn>
    </div>
  )
}else{
  return(
    <>
    <h1>Hello... {user.email}</h1>
    <button onClick={()=>{signOut(auth)}}>Logout</button>
    </>
  );
}


}
export default Authen;