import React, { useState, useEffect } from "react";
import "./post.css";
import { database } from "../../context/Firebase";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { child, get , ref } from "firebase/database";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Link } from "react-router-dom";


function Posts(props) {
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

  },[]);

  console.log(postData);
  const isAdmin = user && user.email === "solapurevivek2003@gmail.com"


  return (
    <>
      <div className="Pbody">
        {isAdmin && (
          <Link to="/post/inbox">
            <div className="Postbtn">
              <p>+</p>
            </div>
          </Link>
        )}

        {
          Object.values(postData).length === 0 ? (
            <h1>Loading...</h1>
          ) :
            Object.values(postData).reverse().map((post, id) => (
              <div key={id}>{
                <>
                  <div className="Pline1">
                    <div className="Pline"></div>
                  </div>
                  <div className="Pslider">
                    <div className="Pproduct-carousel">
                      <div className="Pproduct-container">
                        <Slider style={{ width: 500 }} {...settings}>
                          {
                            Object.values(post.imglist).length === 0 ? (
                              <p>No images</p>
                            ) :
                              Object.values(post.imglist.split('>>>')).map((image, imageId) =>
                              (
                                <div key={imageId}>
                                  <img style={{ width: 500 }} src={image} alt={`ImageNO ${imageId}`} />
                                </div>
                              ))}
                        </Slider>
                      </div>
                    </div>
                    <div className="Pslide_info">
                      <h3 id="Pslide_info_title">{post.title}</h3>
                      <p id="Pslide_info_para">{post.description}</p>
                      {/* <div className="Pcomment">
                          <textarea id="Pinput" placeholder="Comment" type="text" />
                          <div className="PsendContainer">
                            <img id="Psend" src="./Vector.png" alt="" />
                          </div>
                        </div> */}
                    </div>
                  </div>
                </>

              }

              </div>

            ))
        }
        <div className="Pline1_down">
          <div className="Pline_down"></div>
        </div>
      </div >
    </>
  );
}

export default Posts

