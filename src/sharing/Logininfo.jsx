import React from "react";
import './Logininfo.css'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import LogininfoCard from './LogininfoCard';
import LogIn from './Ketan_Login';
import './LogininfoCard.css'

const Logininfo = () => {
  const auth = getAuth();
  const [user, setuser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are logged in", user);
        setuser(user)
      } else {
        console.log("you are logged out");
        setuser(null)
      }
    })
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <LogIn></LogIn>
      </div>
    )
  } else {

    return (<>
      <div className="Logininfo_Main-logged">
        <div className="Logininfo_header-container-log">
          <img
            className="Logininfo_logo-1-icon"
            alt="logo"
            src="/logo.png"
          />
        </div>
        <div className="Logininfo_coding-crafters-content">
          <div className="Logininfo_coding-crafters-txt">
            <b>Coding</b>
            <span className="Logininfo_crafters-txt"> Crafter’s</span>
          </div>
        </div>
        <div className="card_sub-header-component-parent">
          <div className="card_sub-header-component">
            <div className="card-welcome-to-the-community-parent">
              <p className="card_welcome-to-the-container">
                <span>Welcome to the Community</span>
              </p>

            </div>
          </div>
          <div className="hh">
            <div className="card_profile-message-area">
              <div className="card_profile-message-area-child" />
              <div className="hey-now-container">
                <span className="hey-now-container1">
                  <p className="hey">Hey ! {user.email}</p>
                  <p className="now-can-access">{`Now Can access the this application as per your position norms `}</p>
                </span>
              </div>
              <div className="log-out-button">
                <div className="name-role-container">
                  <span className="name-role-container1">

                  </span>
                </div>
                <div className="log-out-button-inner">
                  <button className="card_rectangle-parent">
                    <div className="frame-child" />
                    <div className="log-out" onClick={() => { signOut(auth) }}>Log Out</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
export default Logininfo;