import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { database } from "../../context/Firebase";
import { useState, useEffect } from "react";
import { child, get, ref } from "firebase/database";

const Navbar = (props) => {
  const auth= getAuth();
  const [user, setuser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setuser(user)
    })
},[]);

const [mainMemberData, setmainMemberData] = useState([]);
const [email, setemail] = useState([])


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
    // Object.values(mainMemberData).map(a=>{
    //   console.log(a.email);
    //   Object.values(a).map(b=>{
    //     console.log(b.email);
    //   })
    // })

    // Initialize an empty array to store the email values
let emailValues = [];

Object.values(mainMemberData).forEach(a => {
  if (a.email) {
    emailValues.push(a.email);
  }
  Object.values(a).forEach(b => {
    if (b.email && b.email !== a.email) { // Check if b.email exists and is different from a.email
      emailValues.push(b.email);
    }
  });
});

console.log(emailValues);

const searchEmail = 'solapurevivek12@gmail.com';
const emailExists = emailValues.includes(user);



if (emailExists) {
  console.log(`The email address ${searchEmail} exists.`);
} else {
  console.log(`The email address ${searchEmail} does not exist.`);
}

    
    // console.log(mainMemberData);

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
            <Link to="/loginInfo">  <img className="profile-pic" src="./dummy_profile.png" alt="" /></Link>
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
