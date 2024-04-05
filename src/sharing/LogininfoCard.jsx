import React from "react";
import './LogininfoCard.css'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect,useState } from 'react';
import LogIn from './Ketan_Login';


const LogininfoCard = () => {
  
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
  return (
    <>
      
    </>
  )
}
}
export default LogininfoCard;