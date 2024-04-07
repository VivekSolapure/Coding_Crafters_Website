import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from "react";
import { child, get, ref } from "firebase/database";
import { database } from "../../context/Firebase";

const Navbar = (props) => {
  const auth= getAuth();
  const [user, setuser] = useState(null)
  const [mainMemberData, setmainMemberData] = useState([]);
const [email, setemail] = useState([])
const [emailProfilePhoto, setemailProfilePhoto] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setuser(user)
      if (user) {
        setemailProfilePhoto(user.photoURL);
      }
    })
},[]);
console.log(user);
let emailValues = [];

useEffect(() => {
  if (user != null) {
    Object.values(mainMemberData).forEach((a, id) => {
      if (a.email === user.email) {
        setemailProfilePhoto(a.profile);
      } else {
        Object.values(a).forEach(b => {
          if (b && b.email === user.email) { // Check if b.email exists and is different from a.email
            setemailProfilePhoto(b.profile);
          }
        });
      }
    });
  }
}, [user, mainMemberData]);





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


  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <div className="title">
            <Link to="/"><p>Coding <br /> Crafters</p></Link>
          </div>

          <div>
            <input type="checkbox" id="hamburger-toggle" className="hamburger-checkbox" />
            <label htmlFor="hamburger-toggle" className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </label>

          <div className="div-item">
            <div className="items item1">
              <Link className="itemss" to="/">Home</Link>
            </div>

            <div className="items item2">
              <Link className="itemss" to="/events">Events</Link>
            </div>
            <div className="items item3">
              <Link className="itemss" to="/gallery">Gallery</Link>
            </div>
          

            <div className="items profile_item">
            {emailProfilePhoto === null ? (
                  <Link to="/loginInfo"><img className="profile-pic" src="./dummy_profile.png" alt="Profile" /></Link>
                ) : (
                  <Link to="/loginInfo"><img className="profile-pic" src={emailProfilePhoto}  alt="Profile" /></Link>
                )}
            </div>
          </div>
        </div>


      </div>
      </div>


    </>
  );
};
export default Navbar;
Navbar.proptype = {
  Title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  Title: "Coding Crafters",
  post: "Post",
};
