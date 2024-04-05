import React from 'react'
import { database } from "../../context/Firebase";
import { useState, useEffect } from "react";
import { child, get, ref } from "firebase/database";
import { Link } from 'react-router-dom';

const MainBoardLists = props => {
    // console.log(props.MboardItems);

    const [mainMemberData, setmainMemberData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                get(child(ref(database), 'community')).then(snapshot => {
                    const data = snapshot.val();
                    if (data) {
                        // console.log(data);
                        setmainMemberData(data);
                    }
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);
    const [developer, setdeveloper] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                get(child(ref(database), 'community/g_Developer')).then(snapshot => {
                    const data = snapshot.val();
                    if (data) {
                        // console.log(data);
                        setdeveloper(data);
                    }
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);
    // console.log(developer);
    const [member, setmember] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                get(child(ref(database), 'community/h_Member')).then(snapshot => {
                    const data = snapshot.val();
                    if (data) {
                        // console.log(data);
                        setmember(data);
                    }
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);

    if (mainMemberData === 0) {
        return (
            <div className="NoMboardMembers">
                <h1>No Main Board Members</h1>
            </div>
        )
    }
    let a = {}
    return <div className="member-container2">
        <h2 id='member_title' >Members</h2>
        {
            Object.values(mainMemberData).map((mainMem, id) => (
                mainMem.description != 'ok' ? (null) :
                    <div key={id}>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src={mainMem.profile} id='member_photo' alt="" />
                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  {mainMem.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {mainMem.name}</h3></p>
                                    <h4>Persuing : {mainMem.persuing}</h4>
                                    <p>selected for</p>
                                    <h5>2024-25</h5>
                                </div>{
                                    Object.values(mainMem).map((socials, id) => (
                                        <div className="ccard__button" key={id}>
                                            
                                            <a href={socials.github} target="_blank"><img className='gitgggg' src="git.png" alt="" /></a>
                                            <a href={socials.linkedin} target="_blank"><img className='gitgggg' src="linkedin.png" alt="" /></a>
                                            <a href={socials.twitter} target="_blank"><img className='gitgggg' src="twitter.png" alt="" /></a>
                                            <a href={socials.instagram} target="_blank"><img className='gitgggg' src="instagram.png" alt="" /></a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

            ))
        }
        {
            Object.values(developer).map((dev, id) => (
                dev.description != 'ok' ? (null) :
                    <div key={id}>
                        <div className="cardDiv">
                            <div className="cardImg">
                                <img src={dev.profile} id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  {dev.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {dev.name}</h3></p>
                                    <h4>Persuing :{dev.persuing}</h4>
                                    <p>selected for</p>
                                    <h5>2024-25</h5>
                                </div>{
                                    Object.values(dev).map((socials, id) => (
                                        <div className="ccard__button" key={id}>
                                            
                                            <a href={socials.github} target="_blank"><img className='gitgggg' src="git.png" alt="" /></a>
                                            <a href={socials.linkedin} target="_blank"><img className='gitgggg' src="linkedin.png" alt="" /></a>
                                            <a href={socials.twitter} target="_blank"><img className='gitgggg' src="twitter.png" alt="" /></a>
                                            <a href={socials.instagram} target="_blank"><img className='gitgggg' src="instagram.png" alt="" /></a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

            ))
        }
        {
            Object.values(member).map((dev, id) => (
                dev.description != 'ok' ? (null) :
                    <div key={id}>
                        <div className="cardDiv">
                            <div className="cardImg">
                                <img src={dev.profile} id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  {dev.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {dev.name}</h3></p>
                                    <h4>Persuing :{dev.persuing}</h4>
                                    <p>selected for</p>
                                    <h5>2024-25</h5>
                                </div>{
                                    Object.values(dev).map((socials, id) => (
                                        <div className="ccard__button" key={id}>
                                            
                                            <a href={socials.github} target="_blank"><img className='gitgggg' src="git.png" alt="" /></a>
                                            <a href={socials.linkedin} target="_blank"><img className='gitgggg' src="linkedin.png" alt="" /></a>
                                            <a href={socials.twitter} target="_blank"><img className='gitgggg' src="twitter.png" alt="" /></a>
                                            <a href={socials.instagram} target="_blank"><img className='gitgggg' src="instagram.png" alt="" /></a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

            ))
        }
        
        {/* {Object.values(mainMemberData)===null ? (<h1>...</h1> ) : Object.values(mainMemberData).map((mainMem,id) => (
            mainMem.rolee === 'mem' ? ( null):( mainMem.rolee === 'dev' ? (
                Object.values(mainMem).map((dev, id) => (
                    dev.name === '' ? (null):
                    <div key={id}>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src={dev.profile} id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  {dev.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {dev.name}</h3></p>
                                    <h4>Persuing :{dev.course}</h4>
                                    <p>selected for</p>
                                    <h5>2024-25</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            ):
            <div key={id}>
                <div className='cardDiv'>
                    <div className="cardImg">
                        <img src={mainMem.profile} id='member_photo' alt="" />

                    </div>
                    <div className="IncardDiv">
                        <div className="infoDiv">
                            <p id='name'>  {mainMem.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {mainMem.name}</h3></p>
                            <h4>Persuing :{mainMem.course}</h4>
                            <p>selected for</p>
                            <h5>2024-25</h5>
                        </div>
                    </div>
                </div>{
                    // console.log(mainMem)
                }
                { 
                   mainMem.role === 'dev' && Object.values(mainMem).map((dev, id) => (
                        <div key={id}>
                            <div className='cardDiv'>
                                <div className="cardImg">
                                    <img src={dev.profile} id='member_photo' alt="" />

                                </div>
                                <div className="IncardDiv">
                                    <div className="infoDiv">
                                        <p id='name'>  {dev.role} <div className='underline1'><div className='underline' ></div></div><h3 id='name'> {mainMem.name}</h3></p>
                                        <h4>Persuing :{dev.course}</h4>
                                        <p>selected for</p>
                                        <h5>2024-25</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                {
                    //  mainMem.role === 'mem' && 
                }

            </div>)

        )
        )}  */}

    </div>
}

export default MainBoardLists