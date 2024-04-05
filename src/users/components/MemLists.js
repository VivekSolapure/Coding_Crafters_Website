import React from 'react'
import './MemLists.css'
import { database } from "../../context/Firebase";
import { useState, useEffect } from "react";
import { child, get , ref } from "firebase/database";


const MemLists= (props) => {
   return (
    <>
      <div className="member_div_h1">
        <h1 className='member_h1'>Members</h1>
      </div>
      {props.items.length === 0 ? (
        <div className="NoMembers">
          <h1>No Members Found</h1>
        </div>
      ) : (
        <>
          {props.items.map(member => (
            <div className="member_container" key={member.id}>
              <div className="member_main_container">
                <div className="member_content1">
                  <div className="member_content2">
                    <div className="member_content_img">
                      <img src={member.image} alt="" />
                    </div>
                    <div className="member_content_txt">
                      <h1>{member.role}</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro repellat, at cumque quaerat, fugiat nam consectetur, quas ipsam minus tenetur unde quasi vitae quos! Ipsam assumenda tenetur ab saepe?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
    
}

export default MemLists