import "./LoginComponent.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';

const LoginComponent = () => {
  const firebase = useFirebase();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [member, setmember] = useState('')
  let time = Date.now();

  const [sshowError, setsShowError] = useState(false);

  const loginHandler = () => {
    setsShowError(true)
      firebase.LogInWithEmailAndPassword(email, password)
  }
  const [authenBtn, setAuthenBtn] = useState('Login');
  const [authenBtntxt, setAuthenBtntxt] = useState('Alreadly have account?');

  const toggleAuthBtn = () => {
    setemail('')
    setpassword('')
    setShowError(false)
    setAuthenBtn(authenBtn === 'Signup' ? 'Login' : 'Signup');
    setAuthenBtntxt(authenBtntxt ==='Alreadly have account?'? "Don't have an account?" :'Alreadly have account')
  };

  const Signup_firebase = useFirebase();
  const [Signup_email, setSignup_email] = useState('')
  const [Signup_password, setSignup_password] = useState('')
  let Signup_time = Date.now();

  const [showError, setShowError] = useState(false);
  const siginErrorHandler=()=>{
    setShowError(true); // Show the error message
    Signup_firebase.signupUserWithEamilandPassword(Signup_email, Signup_password);
    if(!showError) Signup_firebase.putData(`users/${Signup_time}`, { Signup_email, Signup_password });
    // After a delay, hide the error message

  }

  return (
    <>
      {
        authenBtn === "Signup" ? (
          <div className="frame-group">
            <div className="sign-in-wrapper">
              <h1 className="sign-in">Log in</h1>
            </div>
            <div className="frame-container">
              <div className="frame-div">
                {sshowError && <div  className={`${sshowError ? 'shake-animation' : ''}`}>{firebase.error}</div>}
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="icon-person-wrapper">
                    <FaRegUser className="icon-person" />
                  </div>
                  <input className="username" value={email} placeholder="UserName" type="email" required onChange={(e) => {
                    setemail(e.target.value)
                  }} />

                </div>
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="icon-person-wrapper">
                    <FaRegUser className="icon-person" />
                  </div>
                  <input className="username" value={password} placeholder="Password" type="password" required onChange={(e) => {
                    setpassword(e.target.value)
                  }} />

                </div>
        
              </div>
              <div className="login-btn">
                <button className="btn" onClick={loginHandler}>Submit</button>
              </div>
            </div>
          </div>) : (
          <div className="frame-group">
            <div className="sign-in-wrapper">
              <h1 className="sign-in">Signup</h1>
            </div>

            <div className="frame-container">
              <div className="frame-div">
                {showError && <div  className={`${showError ? 'shake-animation' : ''}`}>{firebase.error}</div>}
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="icon-person-wrapper">
                    <FaRegUser className="icon-person" />
                  </div>
                  <input className="username" placeholder="UserName" type="email" required onChange={(e) => {
                    setSignup_email(e.target.value)
                  }} />

                </div>
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="icon-person-wrapper">
                    <FaLock className="icon-person" />
                  </div>
                  <input className="username" placeholder="Password" type="password" required onChange={(e) => {
                    setSignup_password(e.target.value)
                  }} />

                </div>
                
              </div>
              <div className="frame-wrapper">
                <div className="frame-parent1">
                </div>
              </div>
              <div className="login-btn">
                <button className="btn" onClick={siginErrorHandler}>Submit </button>
                <button className="btn" onClick={Signup_firebase.signUpWithGoogle}>
                  <img
                    src="google_logo.png"
                    alt="Google Logo"
                    style={{
                      width: '30px',
                      marginRight: '10px',

                    }}
                  />
                  Sign in with Google
                </button> 
              </div>

            </div>
          </div>
        )
      }
      <div className="Login_Signup_btn">
        <div className="btnn">
          <div className="Login_txt">{authenBtntxt} <span onClick={toggleAuthBtn}>{authenBtn}</span></div>
        </div>
      </div>

    </>

  );
};
export default LoginComponent;
