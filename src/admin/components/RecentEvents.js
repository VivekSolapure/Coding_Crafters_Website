import React, { useState, useEffect } from "react";
import { database } from "../../context/Firebase";
import { child, get, ref } from "firebase/database";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Link } from "react-router-dom";


export const RecentEvents = props => {

  const [recntEvntData, setrecntEvntData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        get(child(ref(database), 'dashupcommingevent')).then(snapshot => {
          const data = snapshot.val();
          if (data) {
            // console.log(data);
            setrecntEvntData(data);
          }
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);
  // console.log(recntEvntData);

  const RecentItems = [
    { id: '1', image: ['./profile-pic.png', './profile-pic.png', './profile-pic.png'], dscrptn: 'Hii Iam Vivek Solapure' }
  ]
  const css = {
    width: 500,

  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>
      <div className="home_body">
        <div className="home_entImgs home_grid3" >

          <div className="home_entSlider">
            <img style={{ ...css }} src={recntEvntData.image} alt="" />
          </div>
        </div>
        <div className="home_entInfo home_grid4">
          <div >
            <div className="quote"><blockquote></blockquote></div>
            <div className="text">{recntEvntData.description}</div>
          </div>
        </div>
      </div>
    </>
  )
}
