import React, { useState, useEffect } from "react";
import './Events.css'
import { Link } from "react-router-dom";
import { database } from "../../context/Firebase";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { child, get, ref } from "firebase/database";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Events = () => {

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const [postData, setpostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                get(child(ref(database), 'post')).then(snapshot => {
                    const data = snapshot.val();
                    if (data) {
                        setpostData(data);
                    }
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);

    console.log(postData);
    const isAdmin = user && user.email === "ketanbhogshetti12@gmail.com"

  
    return (<>
        <div className="event_glow_up" />
        <div className="event_pg_holder0">
            <div className="event_pg_holder">
            {isAdmin && (
          <Link to="/post/inbox">
            <div className="Postbtn">
              <p>+</p>
            </div>
          </Link>
        )}
                <div className="event_headings">
                    <div className="event_heading">Events</div>
                    <div className="eventhd_dscrptn">
                        Take inspiration from these incredible events and feel free to join
                    </div>
                </div>
                {

                    Object.values(postData).length === 0 ? (
                        <h1>Loading...</h1>
                    ) :
                        Object.values(postData).map((post, id) => (
                            <div key={id}>{
                                <>
                                    <div className="event_container1">
                                        <div className="event_container">
                                            <div className="event_image">
                                                <Slider style={{ width: 350 }} {...settings}>
                                                    {
                                                        Object.values(post.imglist).length === 0 ? (
                                                            <p>No images</p>
                                                        ) :
                                                            Object.values(post.imglist.split('>>>')).map((image, imageId) =>
                                                            (
                                                                <div key={imageId}>
                                                                    <img className="event_image" style={{ width: 350 }} src={image} alt={`ImageNO ${imageId}`} />
                                                                </div>
                                                            ))}
                                                </Slider>
                                            </div>

                                            <div className="event_dscrptn">
                                                <div className="event_dscrptn_heading">{post.title}</div>
                                                <div className="event_dscrptn_para">{post.description}</div>
                                            </div>


                                        </div>
                                        <div >
                                            <svg className="event_glow_in_EvnCard" xmlns="http://www.w3.org/2000/svg" width="765" height="731" viewBox="0 0 765 731" fill="none">
                                                <g filter="url(#filter0_f_1096_183)">
                                                    <path d="M556.976 300.967C621.256 411.04 410.04 371.925 320.987 424.277C231.934 476.629 298.767 600.623 234.487 490.55C170.208 380.478 190.291 248.806 279.344 196.454C345.524 259.16 492.697 190.894 556.976 300.967Z" fill="url(#paint0_linear_1096_183)" fill-opacity="0.54" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_f_1096_183" x="0.855469" y="0.455078" width="764.098" height="730.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="98" result="effect1_foregroundBlur_1096_183" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_1096_183" x1="488.009" y1="79.5837" x2="721.941" y2="477.512" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#F6F6F6" />
                                                        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                    </div>
                                </>
                            }
                            </div>))


                }


            </div>
        </div>

    </>
    )
}

export default Events