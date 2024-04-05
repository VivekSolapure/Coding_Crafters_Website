import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';
import Login from './Login';
function Signup() {
    
    const Signup_firebase = useFirebase();
    const [Signup_email, setSignup_email] = useState('')
    const [Signup_password, setSignup_password] = useState('')
    let Signup_time = Date.now();
    return (
        <div>
            <h1>Signin</h1>
            <input type="email" onChange={(e) => setSignup_email(e.target.value)} value={Signup_email} placeholder='Enter Email' />
            <input type="password" onChange={(e) => setSignup_password(e.target.value)} value={Signup_password} placeholder='Enter password' />
            <button onClick={() => {
                Signup_firebase.signupUserWithEamilandPassword(Signup_email, Signup_password);
                Signup_firebase.putData(`users/${Signup_time}`, { Signup_email, Signup_password })
            }}>Submit</button>
            <button onClick={Signup_firebase.signUpWithGoogle}>Signin with Google</button>
        </div>
    )
}

export default Signup;