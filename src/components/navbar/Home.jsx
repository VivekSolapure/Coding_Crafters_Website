import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";
import Mainboard from '../../admin/pages/GetMainboard';
import { RecentEvents } from '../../admin/components/RecentEvents';



export default function Test2() {
    return (
        <>
            <div class="triangle-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="751" height="1023" viewBox="0 0 551 1023" fill="none">
                    <path d="M-124.326 937.667C-161.019 933.798 -187.932 901.375 -184.978 864.597L-120.597 63.0758C-115.714 2.28111 -39.446 -21.8408 -0.491811 25.089L734.798 910.924C773.752 957.853 735.999 1028.37 675.344 1021.98L-124.326 937.667Z" fill="url(#paint0_linear_639_31)" />
                    <defs>
                        <linearGradient id="paint0_linear_639_31" x1="407.5" y1="937.001" x2="158" y2="-18.4989" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0653348" stop-opacity="-1000" />
                            <stop offset="0.589217" stop-color="#1E012F" />
                            <stop offset="1" stop-color="#5D0093" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="triangle-up">

            </div>

            <div className="home_body">
                <div className="home_grid1">
                    <div className="home_h1 ">
                        <h1>Coding <span>Crafters</span></h1>
                    </div>
                    <div className="home_para">
                        <p>At Code Club, we shape future tech
                            professionals in CSE engineering while honing essential soft skill
                            s and communication prowess. Join us on a transformative journey,
                            where innovation meets holistic growth at the Coding Crafters Club
                            , established in 2023.
                        </p>
                    </div>
                    <div className="home_JoinUs">
                        <h1>Join Our <span>Community</span> </h1>
                        <p>Unlock your coding potentials</p>
                        <div className=' home_JoinUs_btn'>
                            <div class="wrap">
                            <Link to='/loginInfo'>    <button class="button">Join Us</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="home_logo home_grid2">
                    <img src="./logo.png" alt="" />
                </div>
                <div className='home_mobile_RecntEvent home_grid3' >
                    <h2 >Recent Events</h2>

                </div>


            </div>
            <div className='home_desktop_RecntEvent home_grid5'>
                <h2 >Upcoming Events</h2>

            </div>
            <RecentEvents />
            <Mainboard />

            {/* <Link to='/addMember'> <div className="AddMemBtn"><p>+</p></div></Link> */}



        </>

    )
}
