import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';

function Login() {
    const firebase = useFirebase();
    const [eemail, seteemail] = useState('')
    const [ppassword, setpassword] = useState('')
    const loginHandler=()=>{
        firebase.LogInWithEmailAndPassword(eemail,ppassword)
    }
  return (
    <div>
        <h1>Login</h1>
            <input type="email" onChange={(e) => seteemail(e.target.value)}  placeholder='Login Email' />
            <input type="password" onChange={(e) => setpassword(e.target.value)}  placeholder='Login password' />
            <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login